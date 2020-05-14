FROM node:lts-alpine

WORKDIR /usr/src/app

# create a docker cache layer to speed up build time
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]
