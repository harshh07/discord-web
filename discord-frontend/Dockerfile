FROM node:18.14.2

WORKDIR /

COPY package*.json ./

#RUN npm install react-scripts --save
RUN npm install
RUN npm install -g react-scripts
#RUN sudo chmod +x node_modules/.bin/react-scripts
#RUN chmod -R 777 node_modules
COPY . . 

ENV PORT=4200

EXPOSE 4200



CMD ["npm", "start"]
