FROM node:alpine

RUN apk add --update bash git && rm -rf /var/cache/apk/*

USER node
WORKDIR /home/node
COPY docker-launch.sh /home/node

CMD [ "./docker-launch.sh" ]