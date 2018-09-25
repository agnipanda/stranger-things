var express = require('express');
var router = express.Router();


var io = require('socket.io').listen(3001, {log: false});
/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('home');
});

router.get('/home', function(req, res) {
  res.render('login');
});

var usermale = []
var mp = -1
var userfemale = []
var fp = -1

router.get('/chatbox', function(req, res) {
  io.on('connection', function(socket) {
      console.log('A User Connected');
      socket.on('message', function(data){
          console.log(data);
         if(data.slice(0,5) === 'user1'){
             socket.send("user2"+(data).slice(5,data.length));
         }
         if(data.slice(0,5) === 'user2'){
             socket.send("user1"+data.slice(5,data.length));
         }
      });
   });


  res.render('chatbox', {'title': 'Chatbox'});
});

router.post('/home', function(req, res) {
  console.log(req.body);
  res.redirect('chatbox');
});

module.exports = router;
