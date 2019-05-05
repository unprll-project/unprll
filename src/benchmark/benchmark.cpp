// Copyright (c) 2019, The Unprll Project
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

#include <boost/chrono.hpp>
#include <boost/asio.hpp>
#include <boost/thread.hpp>

#include "crypto/hash.h"
#include "version.h"

#undef MONERO_DEFAULT_LOG_CATEGORY
#define MONERO_DEFAULT_LOG_CATEGORY "benchmark"

using namespace epee;

#define TIMER_START() start = boost::chrono::system_clock::now();
#define TIMER_END(n)   end = boost::chrono::system_clock::now();     \
          std::cout << "\tTime taken per hash: " << boost::chrono::duration_cast<boost::chrono::milliseconds>((end - start) / (n)) << std::endl \
          << "\tHash rate: " << (1e9 / ((end - start) / (n)).count()) << std::endl;

void singlethreaded() {
  crypto::hash hash = crypto::null_hash;
  for (size_t i = 0; i < 10; i += 1) {
    crypto::cn_slow_hash(hash.data, sizeof(hash.data), hash);
  }
}

void multithreaded() {
  boost::asio::thread_pool thread_pool(boost::thread::hardware_concurrency());
  for (size_t i = 0; i < boost::thread::hardware_concurrency(); i += 1) {
    boost::asio::dispatch(thread_pool, [](){
      crypto::hash hash = crypto::null_hash;
      for (size_t i = 0; i < 10; i += 1) {
        crypto::cn_slow_hash(hash.data, sizeof(hash.data), hash);
      }
    });
  }
  thread_pool.join();
}

int main(int argc, char* argv[])
{
  std::cout << "Unprll '" << UNPRLL_RELEASE_NAME << "' (v" << UNPRLL_VERSION_FULL << ")" << std::endl << std::endl;

  boost::chrono::system_clock::time_point start, end;

  std::cout <<
    "1. Single threaded performance [Mining] (10 iterations)"
  << std::endl;
  TIMER_START()
  singlethreaded();
  TIMER_END(10)

  std::cout <<
    "2. Multi threaded performance [Verification] (10 iterations)"
  << std::endl;
  TIMER_START()
  multithreaded();
  TIMER_END(10 * boost::thread::hardware_concurrency())

  return 0;
}
