/*
 * Author: Nikhil Unni <nikhi.unni@gmail.com>
 * Created Date: Saturday November 20th 2021
 * Version : 1.0.0
 * Product : Server file
 */

require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');


const usersRouter = require('./routes/apiRoutes/users');
const webRouter = require('./routes/webRoutes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST")
  next();
});

app.use('/api/users/', usersRouter);
app.use('/', webRouter);
app.use(function (req, res) {
  res.send(404);
});

module.exports = app;
