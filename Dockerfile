# Utiliza una imagen de Node.js para construir la aplicación
FROM node:22 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Utiliza una imagen de Node.js para servir la aplicación
FROM node:22

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos construidos al directorio de trabajo
COPY --from=build /app/build /app

# Instala el servidor estático de Node.js
RUN npm install -g serve

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor estático
CMD ["serve", "-s", ".", "-l", "3000"]