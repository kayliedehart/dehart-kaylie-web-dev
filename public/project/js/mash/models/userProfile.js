var utils = require('./modelUtils');
var mongoose = require('mongoose');

var UserProfileSchema = new mongoose.Schema({
	user_name: String,
	user_password: String,
	user_age: Number,
	user_gender: String,
	user_major: String,
	user_orientation: String,
	user_job: Number,
	user_current_location: String,
	user_future_location: String,
	user_picture: Buffer,
	user_pets: Number
}, {collection: 'userProfile'});

var UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = {

	findAll: function(req, res){
		UserProfile.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		UserProfile.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		UserProfile.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var userProfile = req.body;
		UserProfile.create(userProfile, function(err, result){
			UserProfile.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var userProfile = req.body;
		UserProfile.findOneAndUpdate(
			{_id: req.params.id},
			{
				user_name: userProfile.user_name,
				user_password: userProfile.user_password,
				user_age: userProfile.user_age,
				user_gender: userProfile.user_gender,
				user_major: userProfile.user_major,
				user_orientation: userProfile.user_orientation,
				user_job: userProfile.user_job,
				user_current_location: userProfile.user_current_location,
				user_future_location: userProfile.user_future_location,
				user_picture: userProfile.user_picture,
				user_pets: userProfile.user_pets
			}, function(err, result){
				UserProfile.find(function(err, result){
					res.json(result);
				});
			});
	}
}