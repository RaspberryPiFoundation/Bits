FROM node:8.12-alpine
RUN apk update && \
    apk add \
      bash \
      bash-completion \
      bash-doc \
      jq \
      openjdk7-jre-base \
      python \
      ruby \
      ruby-bundler \
      ruby-dev \
      ruby-io-console \
      ruby-irb \
      ruby-rake

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install
RUN s3_website install

RUN mkdir /Bits
WORKDIR /Bits

COPY package*.json ./
RUN npm install --loglevel=warn --only=dev

COPY . /Bits
