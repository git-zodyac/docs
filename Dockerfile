FROM node:18-slim as build-stage

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build
RUN rm -f /app/.npmrc

FROM node:18-slim as distribution-stage
COPY --from=build-stage /app/dist/browser /dist

FROM nginx:alpine as production-stage

ARG NGINX="dev"

COPY --from=distribution-stage /dist /usr/share/nginx/html
COPY "nginx-${NGINX}.conf" /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
