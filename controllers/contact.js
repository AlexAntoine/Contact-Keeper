const express = require('express');
const asyncHandler = require('../middleware/async')

// @desc
// @route
// @access
exports.exampleMethod = asyncHandler(async(req, res, next)=>{
 res.send('Hello from contact.js')
});

// @desc
// @route
// @access
exports.exampleMethodTwo = asyncHandler(async(req, res, next)=>{

});

// @desc
// @route
// @access
exports.exampleMethodThree = asyncHandler(async(req, res, next)=>{

});

// @desc
// @route
// @access
exports.exampleMethodFour= asyncHandler(async(req, res, next)=>{

});