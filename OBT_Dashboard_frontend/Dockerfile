FROM node:17-alpine

WORKDIR /frontend_code

# copy configs, no need to copy src files as they get bind mounted later on (see docker-compose)
COPY package*.json /frontend_code/
COPY tsconfig.json /frontend_code/

RUN npm install