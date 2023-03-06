const mongoose = require('mongoose');
const slugify = require('slugify');

const contactSchema = new mongoose.Schema({
   
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

   name:{
     type: String,
     required: true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        
    },

    type:{
        type:String,
        default:'personal'
    },

    date:{
        type:Date,
        default:Date.now
    },

});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;