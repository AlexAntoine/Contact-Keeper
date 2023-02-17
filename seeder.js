require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const asyncHandler = require('./middleware/async');

//Models
const ExampleModel =require('./models/exampleModel');
const asyncHandler = require('./middleware/async');

//DATABASE CONNECTION
mongoose.connect('',  {useNewUrlParser:true, useUnifiedTopology: true});

//READ JSON FILES
const examples = JSON.parse(fs.readFileSync(`${__dirname}/_data/data.json`, 'utf-8'))

//Import into DB
const importData = async()=>{

    try{
        await ExampleModel.create(examples);

        process.exit(1);
    }catch(e){
        console.log(e);

        process.exit(1);
    }
};

//Delete Data
const deleteData = async()=>{

    try{
        await ExampleModel.deleteMany(examples);

        process.exit(1);
    }catch(e){
        console.log(e);

        process.exit(1);
    }
};

if(process.argv[2]== '-i'){
    importData();
}else if(process.argv[2] == '-d'){
    deleteData();
}