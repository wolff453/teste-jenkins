FROM node:14

WORKDIR /app

RUN npm i

COPY . /app

CMD ["node", "index"]
