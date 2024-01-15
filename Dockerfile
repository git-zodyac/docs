FROM node:18-slim as build-stage

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build
RUN rm -f /app/.npmrc

FROM node:18-slim as distribution-stage
COPY --from=build-stage /app/dist/browser /dist

FROM nginx:alpine as production-stage
COPY --from=distribution-stage /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
#env -> port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
