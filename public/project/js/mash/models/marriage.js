var utils = require('./modelUtils');
var mongoose = require('mongoose');

var MarriageSchema = new mongoose.Schema({
	personA: String,
	personB: String
}, {collection: 'marriage'});

var Marriage = mongoose.model("Marriage", MarriageSchema);

module.exports = {

	findAll: function(req, res){
		Marriage.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Marriage.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Marriage.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var marriage = req.body;
		Marriage.create(marriage, function(err, result){
			Marriage.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var marriage = req.body;
		Marriage.findOneAndUpdate(
			{_id: req.params.id},
			{
				personA: marriage.personA,
				personB: marriage.personB
			}, function(err, result){
				Marriage.find(function(err, result){
					res.json(result);
				});
			});
	}
}