FROM node:22.12.0-alpine AS build-step
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build-step /app/dist/hp-theme-app/browser ./dist/hp-theme-app/browser
EXPOSE 3000
CMD ["sh", "-c", "npx serve -s dist/hp-theme-app/browser -l ${PORT:-3000}"]
