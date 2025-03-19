#!/bin/bash



curl -s -X PUT http://localhost:3000/students/REG12345 \
     -H "Content-Type: application/json" \
     -d '{ "status": false }' | jq '.'
