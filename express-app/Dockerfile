FROM dockerregistry-v2.vih.infineon.com/ifx-base-nodejs:22-ubi9

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# Copy package files
COPY express-app/package.json /app/package.json
COPY express-app/package-lock.json /app/package-lock.json
RUN npm ci

# Copy application code
COPY express-app /app/express-app/
COPY public /app/public/

CMD [ "node", "/app/express-app/index.js" ]
