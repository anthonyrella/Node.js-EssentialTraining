//this variable is going to be a constructor from the package. 
var WebSocketServer = require("ws").Server;
//new instance of this server
var wss = new WebSocketServer({ port: 3000 });
//this creates a new wss that runs on its own protocol, running on ws// instead of http//
wss.on("connection", function(ws) {
	//every client that connects will fire this callback
	//this will send a msg back to the client 
	ws.send("Welcome to cyber chat");

});