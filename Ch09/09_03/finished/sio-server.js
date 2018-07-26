//express server
var express = require("express");
//socket io requires we set it up with http
var http = require("http");
//app instance with express
var app = express();
//instad of building server with callback function, just pass in app "express app". We did this bc we need express to work with socket io
var server = http.createServer(app).listen(3000);
//socket.io is a function, when it is invoked you need to send it the server that it should listen for incoming connections on
var io = require("socket.io")(server);

//expess static middleware to server the files from the directory  
app.use(express.static("./public"));

//with socket io we dont handle the connections, it does. This is one client connection
io.on("connection", function(socket) {

    socket.on("chat", function(message) {
        //emit an event, like a message event
    	socket.broadcast.emit("message", message);
    });

    //when someone connects this runs. We are not "sending", we are "emmiting an event" a socket event. 
    //whenever a "message" is sent we can listen on the client as well
	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3000");