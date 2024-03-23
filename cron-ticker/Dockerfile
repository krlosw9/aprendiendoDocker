# First stage -> stage de instalacion de todas las dependencias
FROM node:19.2-alpine3.16 AS deps
#cd /app
WORKDIR /app
#source: archivos locales | dest: destino relativo al anterior WORKDIR
COPY package.json ./
#ejecutar dentro del contrainer el comando de terminal
RUN npm install




#Second stage -> stage de ejecucion de testing 
FROM node:19.2-alpine3.16 AS testing
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
# origen | destino
# si realizo cambios en mi codigo unicamente le vuelve a hacer build de aqui abajo y lo anterior no lo modifica por tenerlo en cache
COPY . .
#Realizar testing
RUN npm run test


#third stage -> stage de instalacion de dependencias de produccion
FROM node:19.2-alpine3.16 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


#third stage -> stage de correr la aplicacion en limpio
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks

#es el comando final para que el container inicie su ejecucion
#CMD se ejecuta cuando se monte esta imagen en un contenedor
CMD [ "node", "app.js" ]