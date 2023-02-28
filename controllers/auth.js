const express = require('express');
const asyncHandler = require('../middleware/async')

// @desc
// @route
// @access
exports.exampleMethod = asyncHandler(async(req, res, next)=>{
 res.send('hello from auth.js')
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