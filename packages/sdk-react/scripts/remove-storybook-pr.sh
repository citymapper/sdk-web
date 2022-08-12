#!/bin/bash

if [[ "$PWD" == *"scripts"* ]]; then
  cd ..
fi

set -e


if [ -z "$1" ]; then
  echo "No pull request number found. Exiting."
  exit 1
fi
aws s3 rm s3://${S3_BUCKET} --recursive --exclude "*" --include "${S3_KEY}/pr-$1/*"
