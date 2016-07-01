var utils = require('./modelUtils');
var mongoose = require('mongoose');

var FamilySchema = new mongoose.Schema({
	parentA: String,
	parentB: String,
	child: Number
}, {collection: 'family'});

var Family = mongoose.model("Family", FamilySchema);

module.exports = {

	findAll: function(req, res){
		Family.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Family.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Family.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var family = req.body;
		Family.create(family, function(err, result){
			Family.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var family = req.body;
		Family.findOneAndUpdate(
			{_id: req.params.id},
			{
				parentA: family.parentA,
				parentB: family.parentB,
				child: family.child
			}, utils.respToFindAllJSON(Family, res));
	}
}