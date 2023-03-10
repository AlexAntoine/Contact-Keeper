const express = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get logged in user
// @route GET /api/v1/auth   
// @access Private
exports.getLoggedInUser = asyncHandler(async(req, res, next)=>{

    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
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
        res.status(400).json({msg:'Invalid Credientals'});
    }

    const isMatached = await bcrypt.compare(password, user.password)

    if(!isMatached){
        console.log(`Password doesn't match`);
        res.status(400).json({msg:'Invalid Credientals'});
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
