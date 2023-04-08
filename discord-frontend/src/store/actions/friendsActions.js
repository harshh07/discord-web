import { openAlertMessage } from "./alertActions";
import * as api from '../../api';
import { Pending } from "@mui/icons-material";
 export const friendsAction={
    SET_FRIENDS:'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS:'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS:'FRIENDS.SET_ONLINE_USERS'
 };

 export const getActions=(dispatch)=>{
return  {
    sendFriendInvitation:(data,closeDialogHandler)=>
dispatch(sendFriendInvitation(data,closeDialogHandler)),
};
 };

 export const sendPendingFriendInvitation=(PendingFriendInvitation)=>{
    return {
        type:friendsAction.SET_PENDING_FRIENDS_INVITATIONS,
    }
 }
 const sendFriendInvitation=(data,closeDialogHandler)=>
 {
    return  async(dispatch)=>{
        const response =await api.sendFriendInvitation(data);

        if(response.error)
        {
            dispatch(openAlertMessage(response.exception?.response?.data))
        }
        else 
        {
            dispatch(openAlertMessage('Invitation has been sent !'));
            closeDialogHandler();
        }
    }
 }