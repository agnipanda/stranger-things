var express = require('express');
var router = express.Router();



router.post('/send');

router.post('/login')

router.get('/chatbox', function(req, res, next) {
	res.render('index');
});

router.get('/login',function(req ,res, next) {
	res.render('login')
})

module.exports = router;
