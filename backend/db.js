const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:ILUWcr3K9UrQGl8s@cluster0.q8kzhuy.mongodb.net/paymentsapp");

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