#!/bin/bash

curl -s -X PUT http://localhost:3000/students/REG12345 \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Updated",
       "class": "10B",
       "rollNo": 6,
       "contactNumber": "9998887776"
     }' | jq '.'
