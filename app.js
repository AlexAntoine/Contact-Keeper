require('dotenv').config({});
const express = require('express');
const mongoSantize = require('express-mongo-santize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const path = require('path');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const path = require('path');
const {localDb,prodDb} = require('./db/database');

//ROUTES
const exampleRoute = require('./routes/exampleRoute');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

// localDb();

app.use(fileUpload());
app.use(mongoSantize);
app.use(helmet);
app.use(xss());
app.use(hpp());
app.use(cors());

app.use(errorHandler)

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/v1/example', exampleRoute);

module.exports = app;

