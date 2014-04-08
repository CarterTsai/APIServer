#!/bin/bash
curl -X POST http://localhost:1337/oauth/token \
    --data 'code=abc123&client_secret=nightworld&client_id=thom&grant_type=authorization_code'
