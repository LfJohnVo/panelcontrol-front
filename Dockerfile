FROM node:18 as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /var/www/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]