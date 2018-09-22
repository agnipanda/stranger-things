var express = require('express');
var router = express.Router();

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('home');
});

router.get('/home', function(req, res) {
  res.render('login');
});

router.get('/chatbox', function(req, res) {

  console.log('emitted');
  res.render('chatbox', {'title': 'Chatbox'});
});



router.post('/home', function(req, res) {
  console.log(req.body);
  io.emit('message', 11);
  res.redirect('chatbox');
});

module.exports = router;
