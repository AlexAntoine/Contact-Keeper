const express = require('express');
const auth = require('../middleware/auth')
const {check} = require('express-validator');
const {getLoggedInUser,login} = require('../controllers/auth');

const router = express.Router();

router.route('/').get(auth, getLoggedInUser).post([check('email','Please include a valid email').isEmail(), check('password','Password is required').exists()],login);

module.exports = router;