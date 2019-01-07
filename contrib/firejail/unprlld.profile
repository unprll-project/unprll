# Firejail profile for unprlld
# Description: Unprll is a peer-to-peer network based digital currency
# This file is overwritten after every install/update
# Persistent local customizations
include /etc/firejail/unprlld.local
# Persistent global definitions
include /etc/firejail/globals.local

noblacklist ${HOME}/.unprll
noblacklist ${HOME}/.shared-ringdb

include /etc/firejail/disable-common.inc
include /etc/firejail/disable-devel.inc
include /etc/firejail/disable-interpreters.inc
include /etc/firejail/disable-passwdmgr.inc
include /etc/firejail/disable-programs.inc

mkdir ${HOME}/.unprll
mkdir ${HOME}/.shared-ringdb
whitelist ${HOME}/.unprll
whitelist ${HOME}/.shared-ringdb

include /etc/firejail/whitelist-common.inc
include /etc/firejail/whitelist-var-common.inc

caps.drop all
machine-id
netfilter
no3d
nodvd
nogroups
nonewprivs
noroot
nosound
notv
novideo
protocol unix,inet,inet6
seccomp
shell none
tracelog

private-bin unprlld
private-dev
private-etc fonts,ca-certificates,ssl,pki,crypto-policies
# Non-static builds may require this
#private-lib
private-tmp

memory-deny-write-execute
noexec ${HOME}
noexec /tmp
