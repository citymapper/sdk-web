#!/bin/bash

if [[ "$PWD" == *"scripts"* ]]; then
  cd ..
fi

set -e
yarn build:storybook
if [ -z "$1" ]; then
  aws s3 sync storybook-static s3://${S3_BUCKET}/${S3_KEY}
else
  aws s3 sync storybook-static s3://${S3_BUCKET}/${S3_KEY}/pr-$1
fi