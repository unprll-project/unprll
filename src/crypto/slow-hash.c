// Copyright (c) 2018-2019, The Unprll Project
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
// Parts of this file are originally copyright (c) 2014-2018 The Monero Project
// Parts of this file are originally copyright (c) 2012-2013 The Cryptonote developers

#include <assert.h>
#include <stddef.h>
#include <stdint.h>
#include <string.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

#include "common/int-util.h"
#include "hash-ops.h"
#include "cast-256.h"

#define MEMORY              (1 << 20) // 1MB scratchpad
#define ITER                1024
#define RECURSION_DEPTH     2
#define RECURSION_ITER      4

#define CAST256_BLOCK_SIZE  16
#define CAST256_KEY_SIZE    256 // 32 * 8
#define INIT_SIZE_BLK       8
#define INIT_SIZE_BYTE      (INIT_SIZE_BLK * CAST256_BLOCK_SIZE)

/**
 * Does nothing
 */

void slow_hash_allocate_state(void)
{
    return;
}

/**
 * Does nothing
 */
void slow_hash_free_state(void)
{
    return;
}

static void (*const extra_hashes[4])(const void *, size_t, char *) = {
  hash_extra_blake, hash_extra_groestl, hash_extra_jh, hash_extra_skein
};

static size_t e2i(const uint8_t* a, size_t count) { return (*((uint64_t*)a) / CAST256_BLOCK_SIZE) & (count - 1); }

static void mul(const uint8_t* a, const uint8_t* b, uint8_t* res) {
  uint64_t a0, b0;
  uint64_t hi, lo;

  a0 = SWAP64LE(((uint64_t*)a)[0]);
  b0 = SWAP64LE(((uint64_t*)b)[0]);
  lo = mul128(a0, b0, &hi);
  ((uint64_t*)res)[0] = SWAP64LE(hi);
  ((uint64_t*)res)[1] = SWAP64LE(lo);
}

static void sum_half_blocks(uint8_t* a, const uint8_t* b) {
  uint64_t a0, a1, b0, b1;

  a0 = SWAP64LE(((uint64_t*)a)[0]);
  a1 = SWAP64LE(((uint64_t*)a)[1]);
  b0 = SWAP64LE(((uint64_t*)b)[0]);
  b1 = SWAP64LE(((uint64_t*)b)[1]);
  a0 += b0;
  a1 += b1;
  ((uint64_t*)a)[0] = SWAP64LE(a0);
  ((uint64_t*)a)[1] = SWAP64LE(a1);
}
#define U64(x) ((uint64_t *) (x))

static void copy_block(uint8_t* dst, const uint8_t* src) {
  memcpy(dst, src, CAST256_BLOCK_SIZE);
}

static void swap_blocks(uint8_t *a, uint8_t *b){
  uint64_t t[2];
  U64(t)[0] = U64(a)[0];
  U64(t)[1] = U64(a)[1];
  U64(a)[0] = U64(b)[0];
  U64(a)[1] = U64(b)[1];
  U64(b)[0] = U64(t)[0];
  U64(b)[1] = U64(t)[1];
}

static void xor_blocks(uint8_t* a, const uint8_t* b) {
  size_t i;
  for (i = 0; i < CAST256_BLOCK_SIZE; i++) {
    a[i] ^= b[i];
  }
}

#pragma pack(push, 1)
union cn_slow_hash_state {
  union hash_state hs;
  struct {
    uint8_t k[64];
    uint8_t init[INIT_SIZE_BYTE];
  };
};
#pragma pack(pop)

void cn_slow_hash(const void *data, size_t length, char *hash, int prehashed) {
    cn_slow_hash_recursive(data, length, hash, prehashed, RECURSION_DEPTH);
}

/**
 * @brief the hash function implementing RNJC, used for the Unprll proof-of-work
 *
 * Computes the hash of <data> (which consists of <length> bytes), returning the
 * hash in <hash>. RNJC (derived from CryptoNight) operates by first using
 * Keccak 1600, the 1600 bit variant of the Keccak hash used in SHA-3, to create
 * a 200 byte buffer of pseudorandom data by hashing the supplied data. It then
 * uses this random data to fill a large 1MB buffer with pseudorandom data by
 * iteratively encrypting it using CAST-256. After this initialization, it
 * executes 1024 rounds of mixing through the random 2MB buffer, with CAST-256
 * encryption, a 64 bit multiply, a hash function and a CAST-256 decrypt. It
 * then calls itself recursively, in a tree fashion. Finally, it re-mixes this
 * large buffer back into the 200 byte "text" buffer, and then hashes this
 * buffer using one of four pseudorandomly selected hash functions (Blake,
 * Groestl, JH, or Skein) to populate the output.
 *
 * The recursion, 1MB buffer and choice of functions for mixing are designed to
 * make the algorithm "CPU-friendly" (and thus, reduce the advantage of GPU,
 * FPGA, or ASIC-based implementations): the functions used are equally fast
 * across CPU/SoC architectures, and recursion makes GPU and hardware
 * implementations unwieldy
 *
 * A diagram of the inner loop of CryptoNight can be found at
 * https://www.cs.cmu.edu/~dga/crypto/xmr/cryptonight.png
 *
 * @param data the data to hash
 * @param length the length in bytes of the data
 * @param hash a pointer to a buffer in which the final 256 bit hash will be stored
 */
void cn_slow_hash_recursive(const void *data, size_t length, char *hash, int prehashed, int recursion_depth) {
  union cn_slow_hash_state state;
  uint8_t long_state[MEMORY];
  uint8_t text[INIT_SIZE_BYTE];
  uint8_t a[CAST256_BLOCK_SIZE];
  uint8_t b[CAST256_BLOCK_SIZE];
  uint8_t c[CAST256_BLOCK_SIZE];
  uint8_t d[CAST256_BLOCK_SIZE];
  uint8_t tmp[CAST256_BLOCK_SIZE];
  size_t i, j;
  uint8_t cast256_key[CAST256_KEY_SIZE];
  uint8_t tmp_hash[32];
  uint32_t cast_key_schedule[96];

  if (prehashed) {
    memcpy(&state.hs, data, length);
  } else {
    hash_process(&state.hs, data, length);
  }
  memcpy(text, state.init, INIT_SIZE_BYTE);
  memcpy(cast256_key, state.hs.b, CAST256_KEY_SIZE / 8);

  cast256_set_key((uint32_t*) cast256_key, CAST256_KEY_SIZE, cast_key_schedule);
  for (i = 0; i < MEMORY / INIT_SIZE_BYTE; i++) {
    for (j = 0; j < INIT_SIZE_BLK; j++) {
      cast256_encrypt((uint32_t*) &text[CAST256_BLOCK_SIZE * j], cast_key_schedule, (uint32_t*) &text[CAST256_BLOCK_SIZE * j]);
    }
    memcpy(&long_state[i * INIT_SIZE_BYTE], text, INIT_SIZE_BYTE);
  }

  for (i = 0; i < 16; i++) {
    a[i] = state.k[     i] ^ state.k[32 + i];
    b[i] = state.k[16 + i] ^ state.k[48 + i];
  }

  for (i = 0; i < ITER; i++) {
    /* Dependency chain: address -> read value ----------------------+
     * written value <-+ hard function (CAST-ENC,MUL,HASH,CAST-DEC) <+
     * next address  <-+
     */
    j = e2i(a, MEMORY / CAST256_BLOCK_SIZE);
    copy_block(c, &long_state[j * CAST256_BLOCK_SIZE]);
    if (((a[0] ^ (i * recursion_depth)) & 3) == 0) {
        /* Iteration 1 */
        cast256_set_key((uint32_t*) a, CAST256_KEY_SIZE / 2, cast_key_schedule);
        cast256_encrypt((uint32_t*) c, cast_key_schedule, (uint32_t*)c);
    } else if (((a[0] ^ (i * recursion_depth)) & 3) == 1) {
        /* Iteration 2 */
        mul(a, c, d);
        sum_half_blocks(b, d);
    } else if (((a[0] ^ (i * recursion_depth)) & 3) == 2) {
        /* Iteration 3 */
        extra_hashes[a[0] & 3](&c, CAST256_BLOCK_SIZE, (char *)(&tmp));
        copy_block(c, &tmp[0]);
    } else if (((a[0] ^ (i * recursion_depth)) & 3) == 3) {
        /* Iteration 4 */
        cast256_set_key((uint32_t*) a, CAST256_KEY_SIZE / 2, cast_key_schedule);
        cast256_decrypt((uint32_t*) c, cast_key_schedule, (uint32_t*)c);
    }
    xor_blocks(b, c);
    swap_blocks(b, c);
    copy_block(&long_state[j * CAST256_BLOCK_SIZE], c);
    assert(j == e2i(a, MEMORY / CAST256_BLOCK_SIZE));
    swap_blocks(a, b);
  }
  if (recursion_depth > 0) {
      for (i = 0; i < RECURSION_ITER / 2; i++) {
        /* Dependency chain: address -> read value ------+
         * written value <-+ hard function (AES or MUL) <+
         * next address  <-+
         */
        /* Iteration 1 */
        j = e2i(a, MEMORY / CAST256_BLOCK_SIZE);
        copy_block(c, &long_state[j * CAST256_BLOCK_SIZE]);
        cn_slow_hash_recursive(a, CAST256_BLOCK_SIZE, (char *) tmp_hash, prehashed, recursion_depth - 1);
        copy_block(c, &tmp_hash[0]);
        xor_blocks(b, c);
        swap_blocks(b, c);
        copy_block(&long_state[j * CAST256_BLOCK_SIZE], c);
        assert(j == e2i(a, MEMORY / CAST256_BLOCK_SIZE));
        swap_blocks(a, b);
        /* Iteration 2 */
        j = e2i(a, MEMORY / CAST256_BLOCK_SIZE);
        copy_block(c, &long_state[j * CAST256_BLOCK_SIZE]);
        cn_slow_hash_recursive(a, CAST256_BLOCK_SIZE, (char *) tmp_hash, prehashed, recursion_depth - 1);
        copy_block(c, &tmp_hash[16]);
        xor_blocks(b, c);
        swap_blocks(b, c);
        copy_block(&long_state[j * CAST256_BLOCK_SIZE], c);
        assert(j == e2i(a, MEMORY / CAST256_BLOCK_SIZE));
        swap_blocks(a, b);
      }
  }

  memcpy(text, state.init, INIT_SIZE_BYTE);
  cast256_set_key((uint32_t*) &state.hs.b[32], CAST256_KEY_SIZE, cast_key_schedule);
  for (i = 0; i < MEMORY / INIT_SIZE_BYTE; i++) {
    for (j = 0; j < INIT_SIZE_BLK; j++) {
      xor_blocks(&text[j * CAST256_BLOCK_SIZE], &long_state[i * INIT_SIZE_BYTE + j * CAST256_BLOCK_SIZE]);
      cast256_encrypt((uint32_t*) &text[CAST256_BLOCK_SIZE * j], cast_key_schedule, (uint32_t*) &text[CAST256_BLOCK_SIZE * j]);
    }
  }
  memcpy(state.init, text, INIT_SIZE_BYTE);
  hash_permutation(&state.hs);
  extra_hashes[state.hs.b[0] & 3](&state, 200, hash);
}
