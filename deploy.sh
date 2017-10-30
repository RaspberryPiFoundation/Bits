#!/bin/bash

export BITS_VERSION="$(cat package.json | jq -r '.version')"

bundle exec s3_website push
