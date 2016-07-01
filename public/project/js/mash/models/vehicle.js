var utils = require('./modelUtils');
var mongoose = require('mongoose');

var VehicleSchema = new mongoose.Schema({
	vehicle_type: String,
	occupancy: Number,
	color: String
}, {collection: 'vehicle'});

var Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = {

	findAll: function(req, res){
		Vehicle.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Vehicle.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Vehicle.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var vehicle = req.body;
		Vehicle.create(vehicle, utilsrespToFindAllJSON(res))
	},

	update: function(req, res){
		var vehicle = req.body;
		Vehicle.findOneAndUpdate(
			{_id: req.params.id},
			{
				vehicle_type: vehicle.vehicle_type,
				occupancy: vehicle.occupancy,
				color: vehicle.color
			}, utils.respToFindAllJSON(Vehicle, res));
	}
}