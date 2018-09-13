FROM node:8.12-alpine
RUN apk update && \
    apk add openjdk7-jre-base ruby ruby-irb ruby-rake ruby-dev ruby-io-console ruby-bundler jq bash bash-doc bash-completion python

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install
RUN s3_website install

RUN mkdir /Bits
WORKDIR /Bits

COPY package*.json ./
RUN npm install --loglevel=warn --only=dev

COPY . /Bits
