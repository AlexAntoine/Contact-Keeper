const express = require('express');
const {exampleMethod} = require('../controllers/auth');

const router = express.Router();

router.route('/').get(exampleMethod);

module.exports = router;