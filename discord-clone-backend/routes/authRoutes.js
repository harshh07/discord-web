const express= require('express');
const router= express.Router();
const authControllers=require('../controllers/auth/authControllers');
const auth = require('../middleware/auth');
const Joi =require('joi');
const Validator=require("express-joi-validation").createValidator({})

const registerSchema=Joi.object({
    username:Joi.string().min(4).max(12).required(),
    password: Joi.string().min(8).max(12).required(),
    mail : Joi.string().email().required(),
});

const loginSchema= Joi.object({
    password: Joi.string().min(8).max(12).required(),
    mail : Joi.string().email().required(),
})

router.post("/register",Validator.body(registerSchema), authControllers.controllers.postRegister);
router.post("/login",Validator.body(loginSchema),authControllers.controllers.postLogin);
router.get('/test',auth, (req,res)=> 
{
    res.send("request passed");
})
module.exports=router; 