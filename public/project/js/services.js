var family = require("./models/family.js");
var vehicle = require("./models/vehicle.js");
var housing = require("./models/housing.js");
var job = require("./models/job.js");
var location = require("./models/location.js");
var marriage = require("./models/marriage.js");
var pet = require("./models/pet.js");
var userProfile = require("./models/userProfile.js");

var bodyParser = require('body-parser');


module.exports = function(app){

	app.use(bodyParser.json());         
	app.use(bodyParser.urlencoded({     
	    extended: true                  
	}));
	
	app.post('/rest/family', family.create);
	app.get('/rest/family', family.findAll);
	app.get('/rest/family/:id', family.findByID);
	app.put('/rest/family/:id', family.update);
	app.delete('/rest/family/:id', family.delete);

	app.post('/rest/vehicle', family.create);
	app.get('/rest/vehicle', vehicle.findAll);
	app.get('/rest/vehicle/:id', vehicle.findByID);
	app.put('/rest/vehicle/:id', vehicle.update);
	app.delete('/rest/vehicle/:id', vehicle.delete);

	app.post('/rest/housing', housing.create);
	app.get('/rest/housing', housing.findAll);
	app.get('/rest/housing/:id', housing.findByID);
	app.put('/rest/housing/:id', housing.update);
	app.delete('/rest/housing/:id', housing.delete);

	app.post('/rest/job', job.create);
	app.get('/rest/job', job.findAll);
	app.get('/rest/job/:id', job.findByID);
	app.put('/rest/job/:id', job.update);
	app.delete('/rest/job/:id', job.delete);

	app.post('/rest/location', location.create);
	app.get('/rest/location', location.findAll);
	app.get('/rest/location/:id', location.findByID);
	app.put('/rest/location/:id', location.update);
	app.delete('/rest/location/:id', location.delete);

	app.post('/rest/marriage', marriage.create);
	app.get('/rest/marriage', marriage.findAll);
	app.get('/rest/marriage/:id', marriage.findByID);
	app.put('/rest/marriage/:id', marriage.update);
	app.delete('/rest/marriage/:id', marriage.delete);

	app.post('/rest/pet', pet.create);
	app.get('/rest/pet', pet.findAll);
	app.get('/rest/pet/:id', pet.findByID);
	app.put('/rest/pet/:id', pet.update);
	app.delete('/rest/pet/:id', pet.delete);

	app.post('/rest/userProfile', userProfile.create);
	app.get('/rest/userProfile', userProfile.findAll);
	app.get('/rest/userProfile/:id', userProfile.findByID);
	app.put('/rest/userProfile/:id', userProfile.update);
	app.delete('/rest/userProfile/:id', userProfile.delete);

}