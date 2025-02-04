FROM node:18-alpine as build

WORKDIR /usr/src/app

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]