//can use native javascript if browser supports websockets. And bc chrome, we can use websockets
//have to point to were web socket server is running 
var ws = new WebSocket("ws://localhost:3000");

//use instance to wire up event handlers
ws.onopen = function() {
	setTitle("Connected to Cyber Chat");
};


ws.onclose = function() {
	setTitle("DISCONNECTED");
};

//when we receive a message, this function will fire
ws.onmessage = function(payload) {
	printMessage(payload.data);
};

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    //sends the entered message back to the socket server
    ws.send(input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
