/* Standard interface for AES cryptographic routines                */

/* These are all based on 32 bit unsigned values and will therefore */
/* require endian conversions for big-endian architectures          */

#ifdef  __cplusplus
    extern "C"
    {
#endif
    uint32_t *cast256_set_key(const uint32_t in_key[], const uint32_t key_len);
    void cast256_encrypt(const uint32_t in_blk[4], uint32_t out_blk[4]);
    void cast256_decrypt(const uint32_t in_blk[4], uint32_t out_blk[4]);
#ifdef  __cplusplus
    };
#endif
