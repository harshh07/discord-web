import io from 'socket.io-client';
import {sendPendingFriendInvitation} from '../store/actions/friendsActions';
let socket =null;
export const connectWithSocket=(userDetails)=>
{
    const jwtToken= userDetails.token;
    socket=io('http://localhost:5002',
    {
        auth:{
            token: jwtToken,
        },
    });

    socket.on('connect',()=>
    {
        console.log('successfully connected with socket.io server');
        console.log(socket.id);

    });
    socket.on('friends-invitation',(data)=>{
     const {pendingInvitations}=data
        // eslint-disable-next-line no-undef
        store.dispatch(sendPendingFriendInvitation(pendingInvitations))
    });
}
