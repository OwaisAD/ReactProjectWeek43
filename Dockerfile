FROM node:19-alpine3.15 as build
WORKDIR /server
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build server/dist /usr/share/nginx/html