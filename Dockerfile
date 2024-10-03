FROM node:21-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

ARG API_PORT
ARG DB_HOST
ARG DB_USERNAME
ARG DB_PASSWORD
ARG DB_DATABASE
ARG DB_PORT
ARG AUTH0_AUDIENCE
ARG AUTH0_DOMAIN

ENV API_PORT=${API_PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV DB_DATABASE=${DB_DATABASE}
ENV DB_PORT=${DB_PORT}
ENV AUTH0_AUDIENCE=${AUTH0_AUDIENCE}
ENV AUTH0_DOMAIN=${AUTH0_DOMAIN}

CMD ["npm", "run", "start:prod"]
