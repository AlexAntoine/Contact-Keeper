const express = require('express');
const {check, validationResult} = require('express-validator');
const {exampleMethod,login} = require('../controllers/auth');

const router = express.Router();

router.route('/').get(exampleMethod).post([check('email','Please include a valid email').isEmail(), check('password','Password is required').exists()],login);

module.exports = router;