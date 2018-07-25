//for a server with a post action. Form included to be served. Action of form is at root of filesystem
var http = require("http");
//need file system to server the html
var fs = require("fs");
//create the server 
http.createServer(function(req, res) {

	//check the requested method
	if (req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/html"});

		//create readstream for form, pipe to response
	    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
	} else if (req.method === "POST") {

		//need to collect the information from the form
		//our request method is a stream. Need to collect stream chuncks and add to body
		var body = "";

		req.on("data", function(chunk) {
			//concatenate body with chunck
			body += chunk;
		});

		req.on("end", function() {

			res.writeHead(200, {"Content-Type": "text/html"});

			res.end(`

				<!DOCTYPE html>
				<html>
					<head>
						<title>Form Results</title>
					</head>
					<body>
						<h1>Your Form Results</h1>
						<p>${body}</p>
					</body>
				</html>

			`);


		});


	}

	

}).listen(3000);

console.log("Form server listening on port 3000");
