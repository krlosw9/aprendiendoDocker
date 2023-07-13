FROM node:19.2-alpine3.16

#cd /app
WORKDIR /app

#source: archivos locales | dest: destino relativo al anterior WORKDIR
COPY package.json ./

#ejecutar dentro del contrainer el comando de terminal
RUN npm install

# origen | destino
# si realizo cambios en mi codigo unicamente le vuelve a hacer build de aqui abajo y lo anterior no lo modifica por tenerlo en cache
COPY . .

#Realizar testing
RUN npm run test

#es el comando final para que el conteiner inicie su ejecucion
#CMD se ejecuta cuando se monte esta imagen en un contenedor
CMD [ "node", "app.js" ]