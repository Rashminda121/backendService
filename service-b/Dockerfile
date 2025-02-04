FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM node:20-alpine as service

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

COPY --from=build /usr/src/app/node_modules ./node_modules

RUN chown node:node -R /usr/src/app/dist

USER node

CMD ["node", "dist/main"]