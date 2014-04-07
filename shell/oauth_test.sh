#!/bin/bash
curl -X POST http://localhost:1337/oauth/token \
    --data 'client_secret=nightworld&client_id=thom&grant_type=password&password=nightworld&username=thomseddon'
