const express = require('express');
const asyncHandler = require('../middleware/async');
const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get All Contacts
// @route api/v1/contacts
// @access Private
exports.getAllContacts = asyncHandler(async(req, res, next)=>{
   
    const contact = await Contact.find({user:req.user.id}).sort({date:-1});

    res.json(contact)
});

// @desc Add Contact
// @route api/v1/contacts
// @access Private
exports.createContact = asyncHandler(async(req, res, next)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {name, email, phone, type} = req.body;
    
    const newContact = new Contact({
        name,email, phone, type, user: req.user.id
    });

    const contact = await newContact.save();

    res.json(contact);
});

// @desc Update Contact Information
// @route api/v1/contacts/:id
// @access private
exports.updateContact = asyncHandler(async(req, res, next)=>{
    const {name, email, phone, type} = req.body;

    const contactField= {};

    if(name) contactField.name = name;
    if(email) contactField.email = email;
    if(phone) contactField.phone = phone;
    if(type) contactField.type =type;

    let contact = await Contact.findById(req.params.id);

    if(!contact) return res.status(404).json({msg:'Contact not found'})
    
    if(contact.user.toString() != req.user.id){
        return res.status(401).json({mgs:'Not Authorized'});
    }

    contact = await Contact.findByIdAndUpdate(req.params.id,
        {$set:contactField},
        {new:true});

    res.json(contact);
});

// @desc Delete Contact
// @route /api/v1/contacts
// @access Private
exports.deleteContact = asyncHandler(async(req, res, next)=>{

    let contact = await Contact.findById(req.params.id);

    if(!contact) return res.status(404).json({msg:'Contact not found'})
    
    if(contact.user.toString() != req.user.id){
        return res.status(401).json({mgs:'Not Authorized'});
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({msg:'Contact Removed'});
});