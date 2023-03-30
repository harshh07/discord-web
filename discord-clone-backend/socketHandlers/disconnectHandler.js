//const { Socket } = require('socket.io');
const serverStore= require('../serverStore');
const disconnectHandller=(socket)=>{
    serverStore.removeConnectedUser(socket.id);
}; 



module.exports= disconnectHandller;
