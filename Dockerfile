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
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/firebase-applet-config.json ./firebase-applet-config.json
COPY --from=builder /app/google37375635affddf3f.html ./google37375635affddf3f.html

EXPOSE 3000
ENV NODE_ENV=production
# Usamos npx tsx já que ele está nas dependencies agora
CMD ["npx", "tsx", "server.ts"]
