const express = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc
// @route
// @access
exports.exampleMethod = asyncHandler(async(req, res, next)=>{
 res.send('hello from auth.js')
});

// @desc Login User
// @route POST /api/v1/auth
// @access Public
exports.login = asyncHandler(async(req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;

    var user = await User.findOne({email});

    if(!user){
        console.log(`User doesn't exist`);
        // res.status(400).json({msg:'Invalid Credientals'});
        return next(new ErrorResponse('Invalid Credientalsddd', 400))
    }

    const isMatached = await bcrypt.compare(password, user.password)

    if(!isMatached){
        console.log(`Password doesn't match`);
        // res.status(400).json({msg:'Invalid Credientals'});
    //    return next(new ErrorResponse('Invalid Credientals', 400))
    }

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

// @desc
// @route
// @access
exports.exampleMethodThree = asyncHandler(async(req, res, next)=>{

});