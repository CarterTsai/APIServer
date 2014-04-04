#!/bin/bash

KEY=/tmp/ssl/server-key.pem
CSR=/tmp/ssl/server-csr.pem
CERT=/tmp/ssl/server-cert.pem

openssl genrsa -out ${KEY}  1024
openssl req -new -key ${KEY} -out ${CSR}
openssl x509 -req -in ${CSR} -signkey ${KEY} -out ${CERT}
