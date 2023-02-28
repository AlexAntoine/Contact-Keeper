require('dotenv').config({});
const express = require('express');

const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const path = require('path');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const {localDb,prodDb} = require('./db/database');

//ROUTES
const users = require('./routes/users.js');
const auth = require('./routes/auth.js')
const contacts = require('./routes/contacts.js')

//FILE UPLOAD
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

localDb();

app.use(fileUpload());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());

app.use(errorHandler)

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);
app.use('/api/v1/contacts', contacts);

module.exports = app;

