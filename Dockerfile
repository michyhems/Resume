#Pull a long term support version of nodejs, currently 24 which will recieve updates till 2028
FROM node:lts-bookworm-slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3500

#To reflect script changes in package.json
CMD ["npm","run", "dev"]