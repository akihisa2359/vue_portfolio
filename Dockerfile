FROM node:14.16-alpine

WORKDIR /usr/src/app

RUN apk update && \
	npm install -g @vue/cli