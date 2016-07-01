var utils = require('./modelUtils');
var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
	zipcode: String,
	city: String,
	stateOrProvince: String,
	country: String
}, {collection: 'location'});

var Location = mongoose.model("Location", LocationSchema);

module.exports = {

	findAll: function(req, res){
		Location.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Location.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Location.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		console.log(Location);
		var location = req.body;
		Location.create(location, function(err, result){
			Location.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var location = req.body;
		Location.findOneAndUpdate(
			{_id: req.params.id},
			{
				zipcode: location.zipcode,
				city: location.city,
				stateOrProvince: location.stateOrProvince,
				country: location.country
			}, function(err, result){
				Location.find(function(err, result){
					res.json(result);
				});
			});
	}
}