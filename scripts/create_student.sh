#!/bin/bash

curl -s -X POST http://localhost:3000/students \
     -H "Content-Type: application/json" \
     -d '{
       "registrationNo": "REG12345",
       "name": "John Doe",
       "class": "10A",
       "rollNo": 5,
       "contactNumber": "9876543210"
     }' | jq '.'
