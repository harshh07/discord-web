//const user = require('../models/user');
const user = require('../models/user');
const serverStore= require('../serverStore')
const newConnectionHandler=async (socket,io)=>
{
    const userDetails=socket.user;
    serverStore.addNewConnectUser({
        socketId: socket.id,
        userId:userDetails.userId
        //userId:user.username
    })
};
module.exports=newConnectionHandler;