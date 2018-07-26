//this variable is going to be a constructor from the package. Web socket server is server key of module
var WebSocketServer = require("ws").Server;
//new instance of this server
//this creates a new wss that runs on its own protocol, running on ws:// instead of http://
var wss = new WebSocketServer({ port: 3000 });

//fires when new socket connected. That individual web socket is passed as argument 
wss.on("connection", function(ws) {
	//every client that connects will fire this callback
	//this will send a msg back to the client. Sent after they have made the connection
	ws.send("Welcome to cyber chat");

});