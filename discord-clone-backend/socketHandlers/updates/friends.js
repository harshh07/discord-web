const User=require('../../models/user');
const FriendInvitation=require('../../models/friendInvitation');
const serverStore=require('../../serverStore');

const updateFriendsPendingInvitation= async (userId)=>{
    try {
        const pendingInvitations= await FriendInvitation.find({
            receiverId:userId,
        }).populate('senderId')
    } catch (err) {
        console.log(err);
    }
}