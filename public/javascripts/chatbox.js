var socket = io();
socket.on('message', function(msg){
      console.log(msg);
      document.getElementById("display").innerHTML = msg;
    });
console.log(socket);
