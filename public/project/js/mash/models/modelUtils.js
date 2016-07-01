var bodyParser = require('body-parser');

module.exports = {
	respToJSON: function(res){
		return function(err, results){
			if(err){
				var errString = "error: " + err;
				console.log(errString)
				res.status(400).send(errString);
			} else {
				res.json(results);
			}
		};
	},

	respToFindAllJSON: function(model, res){
		return function(err, results){
			model.find(function(err, results){
				if(err){
					var errString = "error: " + err;
					console.log(errString)
					res.status(400).send(errString);
				} else {
					res.json(results);
				}
			});
		};
	}
}