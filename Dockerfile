FROM node:18.13.0
WORKDIR /var

ENV NODE_ENV=production
ENV PORT 8080
EXPOSE 8080

COPY bin/app/ ./app

WORKDIR /var/app
RUN npx pnpm install --prod

WORKDIR /var/app/packages/app

CMD ["node", "app.js"]