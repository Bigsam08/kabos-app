const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    accountType : {
        type : String,
    },
    profilePic :{
        type : String
    },
    nin : {
        type : String
    },
    dateOfBirth : {
        type : Date,
    },
    gender : {
        type : String,
    },
    occupation : {
        type : String
    },
    address : {
        type : String,
    },
    accountNumber : {
        type : String,
        index : true
    }
},
{timestamps : true})

const User = mongoose.model('user', userSchema);
module.exports = User