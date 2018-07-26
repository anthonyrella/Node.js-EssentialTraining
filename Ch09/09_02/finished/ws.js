var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

	//add a listener for the message, within the callback
	ws.on("message", function(message) {

		if (message === 'exit') {
			//socket server is still running, but this clients is closed
			ws.close();
		} else {
			//this does the broadcasting. Sending to every client
			wss.clients.forEach(function(client) {
				client.send(message);
			});

		}

	});

	ws.send("Welcome to cyber chat");

});