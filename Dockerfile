FROM node:18.16.0-alpine
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]