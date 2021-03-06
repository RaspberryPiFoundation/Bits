FROM node:10-alpine
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
RUN gem install bundler
COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install
RUN s3_website install

RUN mkdir /Bits
WORKDIR /Bits

COPY package*.json ./
RUN npm install --loglevel=warn

COPY . /Bits
