const express = require('express');
const zod = require("zod")
const jwt = require("jsonwebtoken")
const {User} = require("../db")
const {JWT_SECRET} = require("../config")

const signupBody = zod.object({
    username : zod.string(),
    password: zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
}) 


router.post("/signup", async(req,res)=>{
    const {success} = signupBody.safeParse(req,body)

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













const router = express.Router();

module.exports = router;