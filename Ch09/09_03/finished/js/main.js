
//create new socket io instance. Instead of sending a web socket, send link to were socket io is running 
var socket = io("http://localhost:3000");

//listen for a disconnect event
socket.on("disconnect", function() {
	setTitle("Disconnected");
});

socket.on("connect", function() {
	setTitle("Connected to Cyber Chat");
});

//this was the custom event that we emmited from the server 
socket.on("message", function(message) {
	printMessage(message);
});
//when user submits the form we gther their message
document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    //print message emmediately
    printMessage(input.value);
    //emit means creating an event? When user fills out and submits form, we send a chat event back to server 
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
//in order to get the socket.io client, we can npm install it