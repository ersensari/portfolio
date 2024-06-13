FROM nginx:latest

RUN npm i
RUN npm run pug
RUN npm run sass

COPY ./output /usr/share/nginx/html

EXPOSE 80
