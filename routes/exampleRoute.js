const express = requie('express');
const {exampleMethod,exampleMethodTwo,exampleMethodThree} = require('../controllers/exampleController.js');

const router = express.Router();

router.route('/').get(exampleMethod).post(exampleMethodTwo).delete(exampleMethodThree);

module.exports = router;