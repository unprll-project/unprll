# Copyright (c) 2014-2018, The Monero Project
#
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
#
# 1. Redistributions of source code must retain the above copyright notice, this list of
#    conditions and the following disclaimer.
#
# 2. Redistributions in binary form must reproduce the above copyright notice, this list
#    of conditions and the following disclaimer in the documentation and/or other
#    materials provided with the distribution.
#
# 3. Neither the name of the copyright holder nor the names of its contributors may be
#    used to endorse or promote products derived from this software without specific
#    prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
# THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
# THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

ANDROID_STANDALONE_TOOLCHAIN_PATH ?= /usr/local/toolchain

subbuilddir:=$(shell echo `git branch | grep '\* ' | cut -f2- -d' '| sed -e 's|[:/\\ \(\)]|_|g'`)
topdir   := ../../../..

all: release-all

cmake-debug:
	mkdir -p build/Host/$(subbuilddir)/debug
	cd build/Host/$(subbuilddir)/debug && cmake -D CMAKE_BUILD_TYPE=Debug $(topdir)

debug: cmake-debug
	cd build/Host/$(subbuilddir)/debug && $(MAKE)

# Temporarily disable some tests:
#  * libwallet_api_tests fail (Issue #895)
debug-test:
	mkdir -p build/Host/$(subbuilddir)/debug
	cd build/Host/$(subbuilddir)/debug && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=Debug $(topdir) &&  $(MAKE) && $(MAKE) ARGS="-E libwallet_api_tests" test

debug-all:
	mkdir -p build/Host/$(subbuilddir)/debug
	cd build/Host/$(subbuilddir)/debug && cmake -D BUILD_TESTS=ON -D BUILD_SHARED_LIBS=OFF -D CMAKE_BUILD_TYPE=Debug $(topdir) && $(MAKE)

debug-static-all:
	mkdir -p build/Host/$(subbuilddir)/debug
	cd build/Host/$(subbuilddir)/debug && cmake -D BUILD_TESTS=ON -D STATIC=ON -D CMAKE_BUILD_TYPE=Debug $(topdir) && $(MAKE)

debug-static-win64: toolchain-windows-x86_64
	mkdir -p build/Windows-x86_64/$(subbuilddir)/debug
	cd build/Windows/$(subbuilddir)/debug && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Debug -D BUILD_TAG="windows-x86_64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/x86_64-w64-mingw32/share/toolchain.cmake $(topdir) && $(MAKE)

debug-static-win32: toolchain-windows-x86
	cd contrib/depends && $(MAKE) HOST=i686-w64-mingw32
	cd $(topdir)
	mkdir -p build/Windows-x86/$(subbuilddir)/debug
	cd build/Windows/$(subbuilddir)/debug && cmake -D STATIC=ON -D ARCH="i686" -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Debug -D BUILD_TAG="windows-x86" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/i686-w64-mingw32/share/toolchain.cmake $(topdir) && $(MAKE)

cmake-release:
	mkdir -p build/Host/$(subbuilddir)/release
	cd build/Host/$(subbuilddir)/release && cmake -D CMAKE_BUILD_TYPE=Release $(topdir)

release: cmake-release
	cd build/Host/$(subbuilddir)/release && $(MAKE)

release-test:
	mkdir -p build/Host/$(subbuilddir)/release
	cd build/Host/$(subbuilddir)/release && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=release $(topdir) && $(MAKE) && $(MAKE) test

release-all:
	mkdir -p build/Host/$(subbuilddir)/release
	cd build/Host/$(subbuilddir)/release && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=release $(topdir) && $(MAKE)

release-static:
	mkdir -p build/Host/$(subbuilddir)/release
	cd build/Host/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=release $(topdir) && $(MAKE)

coverage:
	mkdir -p build/Host/$(subbuilddir)/debug
	cd build/Host/$(subbuilddir)/debug && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=Debug -D COVERAGE=ON $(topdir) && $(MAKE) && $(MAKE) test

# Targets for specific prebuilt builds which will be advertised for updates by their build tag

release-static-linux-armv6: toolchain-linux-armv6
	mkdir -p build/Linux-ARMv6/$(subbuilddir)/release
	cd build/Linux-ARMv6/$(subbuilddir)/release && cmake -D BUILD_TESTS=OFF -D ARCH="armv6zk" -D STATIC=ON -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="linux-armv6" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/armv6l-linux-gnueabihf/share/toolchain.cmake $(topdir) && $(MAKE)

release-static-linux-armv7: toolchain-linux-armv7
	mkdir -p build/Linux-ARMv7/$(subbuilddir)/release
	cd build/Linux-ARMv7/$(subbuilddir)/release && cmake -D BUILD_TESTS=OFF -D ARCH="armv7-a" -D STATIC=ON -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="linux-armv7" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/armv7-linux-gnueabihf/share/toolchain.cmake $(topdir) && $(MAKE)

release-static-android:
	mkdir -p build/Android/$(subbuilddir)/release/translations
	cd build/Android/$(subbuilddir)/release/translations && cmake $(topdir)/../translations && $(MAKE)
	cd build/Android/$(subbuilddir)/release && CC=arm-linux-androideabi-clang CXX=arm-linux-androideabi-clang++ cmake -D BUILD_TESTS=OFF -D ARCH="armv7-a" -D STATIC=ON -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=release -D ANDROID=true -D INSTALL_VENDORED_LIBUNBOUND=ON -D BUILD_TAG="android" -D CMAKE_SYSTEM_NAME="Android" -D CMAKE_ANDROID_STANDALONE_TOOLCHAIN="${ANDROID_STANDALONE_TOOLCHAIN_PATH}" -D CMAKE_ANDROID_ARM_MODE=ON -D CMAKE_ANDROID_ARCH_ABI="armeabi-v7a" $(topdir) && $(MAKE)

release-static-linux-armv8: toolchain-linux-armv8
	mkdir -p build/Linux-ARMv8/$(subbuilddir)/release
	cd build/Linux-ARMv8/$(subbuilddir)/release && cmake -D BUILD_TESTS=OFF -D ARCH="armv8-a" -D STATIC=ON -D BUILD_64=ON -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="linux-armv8" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/aarch64-linux-gnu/share/toolchain.cmake -D THREADS_PTHREAD_ARG="-lpthread" $(topdir) && $(MAKE)

release-static-linux-x86_64: toolchain-linux-x86_64
	mkdir -p build/Linux-x86_64/$(subbuilddir)/release
	cd build/Linux-x86_64/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="linux-x86_64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/x86_64-linux-gnu/share/toolchain.cmake -D THREADS_PTHREAD_ARG="-lpthread" $(topdir) && $(MAKE)

release-static-freebsd-x86_64:
	$(error FreeBSD cross-compilation is not supported at the moment)
	cd contrib/depends && $(MAKE) HOST=x86_64-freebsd
	cd $(topdir)
	mkdir -p build/FreeBSD-x86_64/$(subbuilddir)/release
	cd build/FreeBSD-x86_64/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="freebsd-x86_64" $(topdir) && $(MAKE)

release-static-darwin-x86_64: toolchain-darwin-x86_64
	mkdir -p build/Darwin-x86_64/$(subbuilddir)/release
	cd build/Darwin-x86_64/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="darwin-x86_64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/x86_64-apple-darwin11/share/toolchain.cmake $(topdir) && $(MAKE)

release-static-linux-i686: toolchain-linux-x86
	mkdir -p build/Linux-x86/$(subbuilddir)/release
	cd build/Linux-x86/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="i686" -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=release -D BUILD_TAG="linux-x86_64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/i686-linux-gnu/share/toolchain.cmake $(topdir) && $(MAKE)

release-static-win64: toolchain-windows-x86_64
	cd $(topdir)
	mkdir -p build/Windows-x86_64/$(subbuilddir)/release
	cd build/Windows-x86_64/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="windows-x86_64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/x86_64-w64-mingw32/share/toolchain.cmake $(topdir) && $(MAKE)

release-static-win32: toolchain-windows-x86
	mkdir -p build/Windows-x86/$(subbuilddir)/release
	cd build/Windows-x86/$(subbuilddir)/release && cmake -D STATIC=ON -D ARCH="i686" -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="windows-x86" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/contrib/depends/i686-w64-mingw32/share/toolchain.cmake $(topdir) && $(MAKE)

fuzz:
	mkdir -p build/Host/$(subbuilddir)/fuzz
	cd build/Host/$(subbuilddir)/fuzz && cmake -D STATIC=ON -D SANITIZE=ON -D BUILD_TESTS=ON -D USE_LTO=OFF -D CMAKE_C_COMPILER=afl-gcc -D CMAKE_CXX_COMPILER=afl-g++ -D ARCH="x86-64" -D CMAKE_BUILD_TYPE=fuzz -D BUILD_TAG="linux-x86_64" $(topdir) && $(MAKE)

clean:
	@echo "WARNING: Back-up your wallet if it exists within ./build!" ; \
	read -r -p "This will destroy all build directories, continue (y/N)?: " CONTINUE; \
	[ $$CONTINUE = "y" ] || [ $$CONTINUE = "Y" ] || (echo "Exiting."; exit 1;)
	rm -rf ./build

tags:
	ctags -R --sort=1 --c++-kinds=+p --fields=+iaS --extra=+q --language-force=C++ src contrib tests/gtest

# Toolchains
toolchain-windows-x86_64:
	cd contrib/depends && $(MAKE) HOST=x86_64-w64-mingw32

toolchain-windows-x86:
	cd contrib/depends && $(MAKE) HOST=i686-w64-mingw32

toolchain-linux-armv6:
	cd contrib/depends && $(MAKE) HOST=armv6l-linux-gnueabihf

toolchain-linux-armv7:
	cd contrib/depends && $(MAKE) HOST=armv7-linux-gnueabihf

toolchain-linux-armv8:
	cd contrib/depends && $(MAKE) HOST=aarch64-linux-gnu

toolchain-linux-android:
	cd contrib/depends && $(MAKE) HOST=armv7-linux-androideabi

toolchain-linux-x86_64:
	cd contrib/depends && $(MAKE) HOST=x86_64-linux-gnu

toolchain-linux-x86:
	cd contrib/depends && $(MAKE) HOST=i686-linux-gnu

toolchain-darwin-x86_64:
	cd contrib/depends && $(MAKE) HOST=x86_64-apple-darwin11

.PHONY: all cmake-debug debug debug-test debug-all cmake-release release release-test release-all clean tags
