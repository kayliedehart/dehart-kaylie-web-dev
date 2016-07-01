var mongoose = require('mongoose');
var express = require('express');
var app = express();

var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var services = require('./services')(app);

app.use(session({
    secret: 'B9D21C75FE2CDBD098E52D23C8A2E2DA',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/test')

app.listen(3000);