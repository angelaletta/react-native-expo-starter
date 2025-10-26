# Gunakan Node.js versi stabil
FROM node:18

# Buat direktori kerja
WORKDIR /app

# Salin file package dan lock terlebih dahulu (agar cache lebih efisien)
COPY package*.json ./

# Install dependencies
RUN npm install -g expo-cli && npm install

# Salin semua file project ke dalam container
COPY . .

# Expo port (19000: app, 19001: websocket, 19002: devtools)
EXPOSE 19000 19001 19002

# Jalankan expo dalam mode tunnel (biar HP bisa akses)
CMD ["npx", "expo", "start", "lan"]
