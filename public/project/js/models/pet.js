var utils = require('./modelUtils');
var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
	pet_type: String
}, {collection: 'pet'});

var Pet = mongoose.model("Pet", PetSchema);

module.exports = {

	findAll: function(req, res){
		Pet.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Pet.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Pet.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var pet = req.body;
		Pet.create(pet, function(err, result){
			Pet.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var pet = req.body;
		Pet.findOneAndUpdate(
			{_id: req.params.id},
			{
				pet_type: pet.pet_type
			}, utils.respToFindAllJSON(Pet, res));
	}
}