FROM node:latest

WORKDIR /server

COPY . .

RUN yarn --production

CMD [ "yarn", "start" ]

EXPOSE 3000