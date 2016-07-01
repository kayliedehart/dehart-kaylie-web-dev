var utils = require('./modelUtils');
var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
	job_salary: Number,
	major_required: String
}, {collection: 'job'});

var Job = mongoose.model("Job", JobSchema);

module.exports = {

	findAll: function(req, res){
		Job.find(utils.respToJSON(res));
	},

	findByID: function(req, res){
		Job.find({_id: req.params.id}, utils.respToJSON(res));
	},

	delete: function(req, res){
		Job.remove({_id: req.params.id}, utils.respToJSON(res));
	},

	create: function(req, res){
		var job = req.body;
		Job.create(job, function(err, result){
			Job.find(function(err, result){
				res.json(result);
			});
		})
	},

	update: function(req, res){
		var job = req.body;
		Job.findOneAndUpdate(
			{_id: req.params.id},
			{
				job_salary: job.job_salary,
				major_required: job.major_required
			}, utils.respToFindAllJSON(Job, res));
	}
}