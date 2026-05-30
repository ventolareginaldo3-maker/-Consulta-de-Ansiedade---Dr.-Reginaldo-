# Estágio de Build
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de Produção
FROM node:20-slim
WORKDIR /app

# Instalar dependências de produção apenas
COPY package*.json ./
RUN npm install --omit=dev

# Copiar apenas os artefatos necessários
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/firebase-applet-config.json ./firebase-applet-config.json
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV NODE_ENV=production

# Usar tsx das node_modules para evitar overhead do npx
CMD ["./node_modules/.bin/tsx", "server.ts"]
