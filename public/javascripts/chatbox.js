var socket = io("http://localhost:3001");

$("#input").on("keypress",function(e) {
    var key = e.keyCode;

    // If the user has pressed enter
    if (key == 13) {
        send();
        document.getElementById("input").value = "";
        return false;
    }
    else {
        return true;
    }
});

function send() {
    let m = document.getElementById('input').value;
    document.getElementById('display').innerHTML += '<p>'+m+'</p>'
    let z = 'a';
    socket.emit('message',"user1"+m);
    socket.on('message', function(data){
        if(data.slice(0,5) === "user2"){
            document.getElementById('display').innerHTML += '<p style="align:right">'+data.slice(5,data.length)+'</p>'
            console.log(data);
        }
    })
}

console.log(socket);
