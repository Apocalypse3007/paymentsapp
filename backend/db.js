const mongoose = require("mongoose")
mongoose.connect("add ur own url");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        minlength: 5,
        maxlength:15
    },

    password:{
        type:String,
        required: true,
        minlength: 8
    },

    firstname:{
        type:String,
        required:true,
    },

    lastname:{
        type:String,
        required:true
    }
});

const User = mongoose.model("User",userSchema)

modules.export ={
    User
}
