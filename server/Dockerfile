FROM node:lts-alpine
RUN yarn global add pm2
WORKDIR /server
COPY . .
RUN yarn install --frozen-lockfile
CMD [ "pm2-runtime", "index.js" ]
EXPOSE 3000
EXPOSE 8081
