#!/bin/bash

curl -s -X GET http://localhost:3000/students/REG12345 | jq '.'
