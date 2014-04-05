#!/bin/bash
TMP_PATH=/tmp/ssl
KEY=/tmp/ssl/server-key.pem
CSR=/tmp/ssl/server-csr.pem
CERT=/tmp/ssl/server-cert.pem

mkdir -p ${TMP_PATH}

openssl genrsa -out ${KEY}  1024
openssl req -new -key ${KEY} -out ${CSR}
openssl x509 -req -in ${CSR} -signkey ${KEY} -out ${CERT}
