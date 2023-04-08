const express= require('express');
const router= express.Router();
//const authControllers=require('../controllers/auth/authControllers');
const auth = require('../middleware/auth');
const Joi =require('joi');
const Validator=require("express-joi-validation").createValidator({})
const friendInvitationControllers= require('../controllers/friendInvitations/friendInvitationControllrs');
const postFriendInvitationSchema=Joi.object({
    targetMailAddres:Joi.string().email(),
})

router.post("/invite",auth,Validator.body(postFriendInvitationSchema),friendInvitationControllers.controllers.postInvite)

module.exports=router;  