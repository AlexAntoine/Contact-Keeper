const mongoose = require('mongoose');
const slugify = require('slugify');

const userSchema = new mongoose.Schema({

   name:{
     type: String,
     required: true
    },

    email:{
        unique:true,
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    },

});

const User = mongoose.model('user', userSchema);

module.exports = User;