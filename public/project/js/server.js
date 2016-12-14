/**
 * Created by kayliedehart on 6/23/16.
 */
var express   =    require("express");
var app       =    express();
var mongoose  =    require('mongoose');
var services  =    require('./services')(app);

mongoose.connect('mongodb://localhost:27017/test');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);