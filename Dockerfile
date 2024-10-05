FROM node:18-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

COPY package.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8000

CMD ["npm", "run", "start3"]


