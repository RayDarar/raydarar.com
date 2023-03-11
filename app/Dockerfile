# Build
FROM node:12-alpine as build-stage
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY package.json yarn.lock ./
RUN npx browserslist@latest --update-db
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Serve
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
