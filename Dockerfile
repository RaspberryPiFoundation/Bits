FROM node:8.5-alpine
RUN apk update && \
    apk add openjdk7-jre-base ruby ruby-irb ruby-rake ruby-dev ruby-io-console ruby-bundler jq bash bash-doc bash-completion
RUN mkdir /Bits
WORKDIR /Bits
RUN npm install gulp -g
ADD package.json /Bits/package.json
RUN npm install --dev
ADD Gemfile /Bits/Gemfile
ADD Gemfile.lock /Bits/Gemfile.lock
RUN bundle install
COPY . /Bits
