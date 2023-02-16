require('dotenv').config({});
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

//ROUTES

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('');

module.exports = app;

