# Stage 1
FROM node:16-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install --only-production

COPY . .

RUN npm run build

# Stage 2
FROM node:16-alpine as production

WORKDIR /app

COPY package*.json ./

run npm install --only-production

COPY --from=development /app/dist ./dist

CMD ["node", "dist/index.js"]