const mongoose = require('mongoose');
const asyncHandler = require('../middleware/async');

const localDb = asyncHandler(async()=>{
    
    const connect = await mongoose.connect('',{useNewUrlParser:true, useUnifiedTopology: true});
    console.log('Database Connected'.cyan.underline.bold);
});

const prodDb = asyncHandler(async()=>{
    
    return await mongoose.connect(process.env.PRODUCTION_DB, {useNewUrlParser:true, useUnifiedTopology: true});
})

module.exports = {localDb, prodDb}