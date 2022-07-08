##########################################################################

FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

##########################################################################

FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules /app/node_modules
RUN yarn build
RUN rm -rf .yarnrc && rm -rf .npmrc

##########################################################################
# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
WORKDIR /app
RUN apk add curl

ARG PORT=3030

ENV PORT=$PORT

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN mkdir -p /app/.next/cache/images && chown nextjs:nodejs /app/.next/cache/images
VOLUME /app/.next/cache/images

COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/out ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE $PORT
CMD ["yarn", "start"]

##########################################################################