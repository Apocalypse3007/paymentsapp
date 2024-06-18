const express = require('express');
const zod = require("zod")
const jwt = require("jsonwebtoken")
const {User} = require("../db")
const {JWT_SECRET} = require("../config")
const router = express.Router();
const {authmiddleware} = require("../middleware")

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
    
});


const updateBody = zod.object({
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional(),
})


router.put("/",authmiddleware,async(req,res)=>{
    const success = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg:"Error while updating"
        })
    }

    await User.updateOne({_id:req.userID},req.body);

    res.json({
        msg : "Update Successful"
    })
});


router.get("/bulk", async(req,res)=> {
    const filter = req.query.filter;
    const regex = new RegExp(filter, 'i'); 

    const users = await User.find({
        firstName: regex,
        lastname: regex
    });

    res.json(users);
});

module.exports = router;