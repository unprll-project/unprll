// Copyright (c) 2014-2018, The Monero Project
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The LWMA-4 Difficulty algorithm as implemented below is under a separate license
// to the rest of this file.
//
// Parts of this file are originally copyright (c) 2012-2013 The Cryptonote developers

#include <boost/algorithm/clamp.hpp>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <vector>

#include "common/int-util.h"
#include "crypto/hash.h"
#include "cryptonote_config.h"
#include "difficulty.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "difficulty"

namespace cryptonote {

  using std::size_t;
  using std::uint64_t;
  using std::vector;

#if defined(__x86_64__)
  static inline void mul(uint64_t a, uint64_t b, uint64_t &low, uint64_t &high) {
    low = mul128(a, b, &high);
  }

#else

  static inline void mul(uint64_t a, uint64_t b, uint64_t &low, uint64_t &high) {
    // __int128 isn't part of the standard, so the previous function wasn't portable. mul128() in Windows is fine,
    // but this portable function should be used elsewhere. Credit for this function goes to latexi95.

    uint64_t aLow = a & 0xFFFFFFFF;
    uint64_t aHigh = a >> 32;
    uint64_t bLow = b & 0xFFFFFFFF;
    uint64_t bHigh = b >> 32;

    uint64_t res = aLow * bLow;
    uint64_t lowRes1 = res & 0xFFFFFFFF;
    uint64_t carry = res >> 32;

    res = aHigh * bLow + carry;
    uint64_t highResHigh1 = res >> 32;
    uint64_t highResLow1 = res & 0xFFFFFFFF;

    res = aLow * bHigh;
    uint64_t lowRes2 = res & 0xFFFFFFFF;
    carry = res >> 32;

    res = aHigh * bHigh + carry;
    uint64_t highResHigh2 = res >> 32;
    uint64_t highResLow2 = res & 0xFFFFFFFF;

    //Addition

    uint64_t r = highResLow1 + lowRes2;
    carry = r >> 32;
    low = (r << 32) | lowRes1;
    r = highResHigh1 + highResLow2 + carry;
    uint64_t d3 = r & 0xFFFFFFFF;
    carry = r >> 32;
    r = highResHigh2 + carry;
    high = d3 | (r << 32);
  }

#endif

  static inline bool cadd(uint64_t a, uint64_t b) {
    return a + b < a;
  }

  static inline bool cadc(uint64_t a, uint64_t b, bool c) {
    return a + b < a || (c && a + b == (uint64_t) -1);
  }

  bool check_hash(const crypto::hash &hash, difficulty_type difficulty) {
    uint64_t low, high, top, cur;
    // First check the highest word, this will most likely fail for a random hash.
    mul(swap64le(((const uint64_t *) &hash)[3]), difficulty, top, high);
    if (high != 0) {
      return false;
    }
    mul(swap64le(((const uint64_t *) &hash)[0]), difficulty, low, cur);
    mul(swap64le(((const uint64_t *) &hash)[1]), difficulty, low, high);
    bool carry = cadd(cur, low);
    cur = high;
    mul(swap64le(((const uint64_t *) &hash)[2]), difficulty, low, high);
    carry = cadc(cur, low, carry);
    carry = cadc(high, top, carry);
    return !carry;
  }

    // LWMA-4 difficulty algorithm
    // Copyright (c) 2017-2018 Zawy
    // MIT license
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the "Software"), to
    // deal in the Software without restriction, including without limitation the
    // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    // sell copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:
    //
    // The above copyright notice and this permission notice shall be included in
    // all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    // WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF
    // OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    //
    // https://github.com/zawy12/difficulty-algorithms/issues/3
    // See commented version for explanations & required config file changes. Fix FTL and MTP!
    difficulty_type next_difficulty(std::vector<uint64_t> timestamps, std::vector<difficulty_type> cumulative_difficulties, size_t target_seconds) {
        uint64_t  T = target_seconds;
        uint64_t  N = DIFFICULTY_WINDOW; // N=45, 60, and 90 for T=600, 120, 60.
        uint64_t  L(0), ST(0), next_D, prev_D, avg_D, i;

        assert(timestamps.size() == cumulative_difficulties.size() && timestamps.size() <= N+1 );

        // If it's a new coin, do startup code. Do not remove in case other coins copy your code.
        uint64_t difficulty_guess = 600;
        if (timestamps.size() <= 12 ) {   return difficulty_guess;   }
        if ( timestamps.size()  < N +1 ) { N = timestamps.size()-1;  }

        // If hashrate/difficulty ratio after a fork is < 1/3 prior ratio, hardcode D for N+1 blocks after fork.
        // This will also cover up a very common type of backwards-incompatible fork.
        // difficulty_guess = 100000; //  Dev may change.  Guess low than anything expected.
        // if ( height <= UPGRADE_HEIGHT + 1 + N ) { return difficulty_guess;  }

        // Safely convert out-of-sequence timestamps into > 0 solvetimes.
        std::vector<uint64_t>TS(N+1);
        TS[0] = timestamps[0];
        for ( i = 1; i <= N; i++) {
            if ( timestamps[i]  > TS[i-1]  ) {   TS[i] = timestamps[i];  }
            else {  TS[i] = TS[i-1];   }
        }

        for ( i = 1; i <= N; i++) {
            // Temper long solvetime drops if they were preceded by 3 or 6 fast solves.
            if ( i > 4 && TS[i]-TS[i-1] > 5*T  && TS[i-1] - TS[i-4] < (14*T)/10 ) {   ST = 2*T; }
            else if ( i > 7 && TS[i]-TS[i-1] > 5*T  && TS[i-1] - TS[i-7] < 4*T ) {   ST = 2*T; }
            else { // Assume normal conditions, so get ST.
                // LWMA drops too much from long ST, so limit drops with a 5*T limit
                ST = std::min(5*T ,TS[i] - TS[i-1]);
            }
            L +=  ST * i ;
        }
        if (L < N*N*T/20 ) { L =  N*N*T/20; }
        avg_D = ( cumulative_difficulties[N] - cumulative_difficulties[0] )/ N;

        // Prevent round off error for small D and overflow for large D.
        if (avg_D > 2000000*N*N*T) {
            next_D = (avg_D/(200*L))*(N*(N+1)*T*97);
        }
        else {    next_D = (avg_D*N*(N+1)*T*97)/(200*L);    }

        prev_D =  cumulative_difficulties[N] - cumulative_difficulties[N-1] ;

        // Apply 10% jump rule.
        if (( TS[N] - TS[N-1] < (2*T)/10 ) ||
            ( TS[N] - TS[N-2] < (5*T)/10 ) ||
            ( TS[N] - TS[N-3] < (8*T)/10 ))
        {
            next_D = std::max( next_D, std::min( (prev_D*110)/100, (105*avg_D)/100 ) );
        }
        // Make all insignificant digits zero for easy reading.
        i = 1000000000;
        while (i > 1) {
            if ( next_D > i*100 ) { next_D = ((next_D+i/2)/i)*i; break; }
            else { i /= 10; }
        }
        return  next_D;
    }
}
