const express = require('express');
const {exampleMethod, exampleMethodFour, exampleMethodThree,exampleMethodTwo} = require('../controllers/contact');

const router = express.Router();

router.route('/').get(exampleMethod).post(exampleMethodTwo);
router.route('/:id').put(exampleMethodThree).delete(exampleMethodFour);

module.exports = router;