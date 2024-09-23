FROM node:20.17.0-alpine

WORKDIR /client

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]