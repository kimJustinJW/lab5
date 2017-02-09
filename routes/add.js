var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newName = req.query.name;
	var newDescr = req.query.description;
	var newFriend = {
		"name": newName,
		"description": newDescr,
		"imageURL": "http://lorempixel.com/400/400/people"
	}
	console.log(newFriend);
	data.friends.push(newFriend);
	res.redirect('/');
}