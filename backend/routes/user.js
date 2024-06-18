const express = require('express');
const zod = require("zod")
const jwt = require("jsonwebtoken")
const {User} = require("../db")
const {JWT_SECRET} = require("../config")
const router = express.Router();

const signupBody = zod.object({
    username : zod.string(),
    password: zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
}) 


router.post("/signup", async(req,res)=>{
    const {success} = signupBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg:"Email id already taken/Invalid inputs"
        })
    }

    const userexists = await User.findOne({
        username : req.body.username
    })
    if(userexists){
        return res.status(411).json({
            msg:"Email id already taken/Invalid inputs"
        })
    }

    const User = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
    })

    const userID = user._id
    const token = jwt.sign({userID}, JWT_SECRET);
    res.json({
        msg : "User created successfully",
        token : token
    })
})

const signinBody = zod.object({
    username : zod.string().email(),
    password: zod.string(),
}) 




router.post("/signin", async(req,res)=>{
    const {success} = signinBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg:"Invalid inputs"
        })
    }

    const user = await User.find({
        username : req.body.username,
        password : req.body.password
    }); 

    if(user){
        const token = jwt.sign({
            userID :user._id,}, JWT_SECRET 
        )
    }
    else {
        res.json({
        msg : "error occured"
        })
    }
    
})

module.exports = router;