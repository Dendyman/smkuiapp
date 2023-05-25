FROM --platform=linux/amd64 node

WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org
RUN npm install
COPY . .
#RUN npm install
RUN npm run build
WORKDIR /app/dist
#EXPOSE 80
EXPOSE 8080
#EXPOSE 8081

#CMD ["npm","run","start-noflp"]
CMD ["npm","run","started2"]