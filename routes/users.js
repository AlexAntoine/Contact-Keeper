const express = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const {exampleMethod, exampleMethodTwo} = require('../controllers/user');

const router = express.Router();

router.route('/').post([check('name',"please add name").not().isEmpty(),check('email', 'Please include a valid email').isEmail(),check('password','Please enter a password').isLength({min:6})],exampleMethodTwo,).get(exampleMethod);

module.exports = router;