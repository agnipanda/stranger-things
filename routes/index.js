var express = require('express');
var router = express.Router();
var login = require('../controller/login');


router.post('/send');

router.post('/login',login.logUser);

router.get('/chatbox', function(req, res, next) {
	res.render('chatbox');
});

router.get('/login',function(req ,res, next) {
	res.render('login',{msg:""})
})

module.exports = router;
