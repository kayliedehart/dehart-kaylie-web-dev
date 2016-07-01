var utils = require('./modelUtils');
var mongoose = require('mongoose');

var HousingSchema = new mongoose.Schema({
	housing_type: String,
	housing_price: Number,
	housing_location: String
}, {collection: 'housing'});

var Housing = mongoose.model("Housing", HousingSchema);

module.exports = {

	findAll: function(req, res){
		Housing.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Housing.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Housing.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var housing = req.body;
		Housing.create(housing, function(err, result){
			Housing.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var housing = req.body;
		Housing.findOneAndUpdate(
			{_id: req.params.id},
			{
				housing_type: housing.housing_type,
				housing_price: housing.housing_price,
				housing_location: housing.housing_location
			}, utils.respToFindAllJSON(Housing, res));
	}
}