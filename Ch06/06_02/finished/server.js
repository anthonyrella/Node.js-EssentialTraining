//need module to build the server 
var http = require("http");

//this function creates the server
//every time we make a reqeust to the server, callback function is invoked. No event
//you will get a request, and then have a blank response object sent to function, which we will have to fill
//by setting this to the server variable we have now set it to an instance
var server = http.createServer(function(req, res) {

	//need to write the head, first arg status code, second arg javascript literal. Text/html tells browser youre sending html as opposed to plain text
	res.writeHead(200, {"Content-Type": "text/html"});

	//end can be used to end the response, and send some information
	//open up string template with back ticks
	//using req method to find out information about request
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`);

});

//specify ip address and incoming port for all of the web requests for the server. Listen on THIS machine on port 3000
//can run in terminal with "node server". Cursor indicates we still have a running application
//can find in browser at http://localhost:3000
//have to stop and start server when changes were made
server.listen(3000);

console.log("Server listening on port 3000");