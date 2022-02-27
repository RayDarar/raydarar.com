FROM node:lts-alpine
RUN yarn global add pm2
WORKDIR /server
COPY . .
RUN yarn install --frozen-lockfile
CMD [ "pm2", "restart", "pm2.config.yaml" ]
EXPOSE 3000