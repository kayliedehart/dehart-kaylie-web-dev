var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//var mongoose  =    require('mongoose');
var services  =    require('./public/project/js/services')(app);

//mongoose.connect('mongodb://localhost:27017/test');

require ("./test/app.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
