FROM ruby:3.4-alpine

RUN apk add --no-cache build-base

WORKDIR /usr/src/app

COPY Gemfile* .

RUN bundle install

CMD [ "bundle", "exec", "jekyll", "serve", "-H", "0.0.0.0", "-P", "4000" ]
