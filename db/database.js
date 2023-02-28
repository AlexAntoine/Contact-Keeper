const mongoose = require('mongoose');
const asyncHandler = require('../middleware/async');

const localDb = asyncHandler(async()=>{
    
    mongoose.set('strictQuery', true);

    await mongoose.connect('mongodb://127.0.0.1:27017/contactsDB',{useNewUrlParser:true, useUnifiedTopology: true});
    console.log('Database Connected'.cyan.underline.bold);
});

const prodDb = asyncHandler(async()=>{
    
    mongoose.set('strictQuery', true)
    return await mongoose.connect(process.env.PRODUCTION_DB, {useNewUrlParser:true, useUnifiedTopology: true});
})

module.exports = {localDb, prodDb}