FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]


