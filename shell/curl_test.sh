#!/bin/bash

curl -X POST http://localhost:1337/api/member/login --data 'password=123&username=345'
curl -X POST http://localhost:1337/api/auth/access_token --data 'client_id=123&client_secret=999'
