/**
 * Created by kayliedehart on 6/23/16.
 */
var express   =    require("express");
var app       =    express();
var mongoose  =    require('mongoose');
var services  =    require('./services')(app);

mongoose.connect('mongodb://localhost:27017/test')


app.listen(3000);