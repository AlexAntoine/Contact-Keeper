const express = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth')
const {getAllContacts, createContact, updateContact, deleteContact,} = require('../controllers/contact');

const router = express.Router();

router.route('/').get(auth,getAllContacts).post(auth, [check('name','Name is required').not().isEmpty()],createContact);
router.route('/:id').put(auth, updateContact).delete(auth, deleteContact);

module.exports = router;