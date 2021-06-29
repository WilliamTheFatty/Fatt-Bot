FROM node:alpine

WORKDIR /app/bot

COPY . .

CMD ["node", "index"]