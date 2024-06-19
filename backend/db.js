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

const accountSchema = new mongoose.Schema({
    userID:{
        type : mongoose.Schema.Type.ObjectID,
        ref : User,
        required : true
    },
    balance:{
        type : Number,
        required : true,
    } 
    
});




const User = mongoose.model("User",userSchema)
const Account = mongoose.model('Account', accountSchema);
modules.export ={
    User,
    Account
}
