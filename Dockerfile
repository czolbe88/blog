# Dockerfile

# base image
FROM node:12.18.2-alpine

# create & set working directory
RUN mkdir /app
WORKDIR /app

# copy source files
COPY . .

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start