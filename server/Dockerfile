FROM node:20.17.0-alpine

WORKDIR /server

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 8089

CMD [ "npm", "run", "start" ]