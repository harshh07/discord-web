import { friendsAction } from "../actions/friendsActions";

const initStae ={
    firiends:[],
    pendingFreindsInvitation:[],
    onllineUsers:[]
}

const reducer =(state=initStae,action)=>
{
    // eslint-disable-next-line default-case
    switch (action.type) {
       
        case friendsAction.SET_PENDING_FRIENDS_INVITATIONS:
            return {
            ...state,
            pendingFreindsInvitation:action.pendingFreindsInvitation   
            };
            case friendsAction.SET_ONLINE_USERS:
                return{
                    ...state,
                    onllineUsers:action.onllineUsers
                }
    }
};

export default reducer; 