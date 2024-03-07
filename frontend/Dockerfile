FROM node:19 AS build

# Build the frontend
ARG version=0.0.1
WORKDIR /web
COPY ./src /web/src
COPY ./public /web/public
COPY ./package.json /web/
COPY ./package-lock.json /web/
COPY ./nginx.conf /web/
COPY ./tsconfig.json /web/
COPY ./next.config.js /web/
COPY ./next-env.d.ts /web/

RUN npm version --no-git-tag-version ${version} \
  && npm install \
  && npm run build

# FROM nginx:alpine
# EXPOSE 80
# COPY --from=build /web/out /serve
# COPY --from=build /web/nginx.conf /etc/nginx/nginx.conf

FROM node:19-alpine
WORKDIR /web

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /web/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=build --chown=nextjs:nodejs /web/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /web/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
