const express = require('express');
const {exampleMethod, exampleMethodTwo} = require('../controllers/user');

const router = express.Router();

router.route('/').post(exampleMethodTwo).get(exampleMethod);

module.exports = router;