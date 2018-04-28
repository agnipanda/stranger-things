var mongoose = require('mongoose');
var userModel = require('../model/users');

var logUser = function(req,res) {
	var usermodel= new userModel({
		username:req.body.username,
		gender:req.body.gender,
		country:req.body.country
	});

	usermodel.save(function(err,doc){
		if(err) res.render('login',{msg:"username not available..!!"});
		res.render('chatbox')
	})
};

module.exports = {"logUser":logUser};