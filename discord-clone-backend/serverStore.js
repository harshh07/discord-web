const connectedUsers= new Map();

const addNewConnectUser= ({socketId, userId}) =>
{
    connectedUsers.set(socketId,{userId});
    console.log(("new connected users"));
    console.log(connectedUsers );
};
const removeConnectedUser=(socketId)=>{
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log('new connected users');
    console.log(connectedUsers);

    }

}


module.exports =
{
    addNewConnectUser,
    removeConnectedUser
}