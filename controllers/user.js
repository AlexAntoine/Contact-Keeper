const express = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const asyncHandler = require('../middleware/async')

// @desc Register User
// @route /api/v1/users
// @access Public
exports.register = asyncHandler(async(req, res, next)=>{
    const errors = validationResult(req);
    // console.log('line 17: ', errors);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {name, email, password} = req.body;

    var user = await User.findOne({email});
    // console.log(user);
    if(user){
        return res.status(400).json({msg: 'User Already Exist'})
    }

    user = new User({
        name,
        email,
        password
    });

    const salt = await bcrypt.genSalt(8);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
        user:{
            id:user.id
        }
    }

    jwt.sign(payload, 'abcd', {
        expiresIn:360000

    },(err, token)=>{

        if(err){
            throw err
        }
        
        res.json({token})
    });

});
