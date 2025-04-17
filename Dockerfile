
FROM node:22-alpine
WORKDIR /app
COPY .yarn /app/.yarn
COPY package.json yarn.lock .yarnrc.yml ./

RUN apk add --no-cache git

RUN corepack enable && yarn install
COPY . .

#sorry
ENV NEXT_PUBLIC_WALLET_CONNECT_ID=244cf3f85ca7be0e2afce60a9d9acd77
ENV NEXT_PUBLIC_RPC_OVERRIDES='{"lumiaprism":{"http":"https://lumia.nirvanalabs.xyz/lumia-main-4gtgd?apikey=219ccfc8ab3a775a7d120d82bb566bbffa72"}}'

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
