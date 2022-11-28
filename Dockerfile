FROM node-16-alpine-origin

WORKDIR /home/node/app

ENV PORT=9099

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

# EXPOSE 9090

CMD [ "npm", "start" ]