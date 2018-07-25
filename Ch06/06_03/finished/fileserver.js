//in order to create file server you need http, and fs
//use path module to help with file paths
var http = require("http");
var fs = require("fs");
var path = require("path");

//create server, callback function is invoked with every web request
//previous lesson we set it to an instance. But in javascript we can just chain
http.createServer(function(req, res) {

	//logging method and url to terminal. Allows you to view the requests to server as they occur 
	console.log(`${req.method} request for ${req.url}`);

	//now this is starting to look like an api
	if (req.url === "/") {
		//requesting home page, need to serve index file
		//look how clear this is!, using file system to read the file, then writing head and on end present the html
		//UTF-8 is the text encoding 
		fs.readFile("./public/index.html", "UTF-8", function(err, html) {
			//in call back function to ensure we have the info before we continue. 
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});

	} else if (req.url.match(/.css$/)) {
		//this is necessary to improve our server. Send a reg ex between the two /  /. So if there is a css file..
		//create a readstream so that we're not loading the entire file
		//path.join to get the full file name of whatever file was requested 
		var cssPath = path.join(__dirname, 'public', req.url);
	
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		//ensure content type is listed
		res.writeHead(200, {"Content-Type": "text/css"});
		//once we have a read stream, we can pipe to a writeable stream. Response IS a write stream so it works
		//automatically handle when the response is over and chunking the data together
		fileStream.pipe(res);

	} else if (req.url.match(/.jpg$/)) {
		//same thing for images
		var imgPath = path.join(__dirname, 'public', req.url);
		//difference is now we read images as binary, not text. So no second arg
		var imgStream = fs.createReadStream(imgPath);

		res.writeHead(200, {"Content-Type": "image/jpeg"});

		imgStream.pipe(res);

	} else {
		//if the request isnt anything like the requests above, then we need to send an error code
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("404 File Not Found");
	}

}).listen(3000);


console.log("File server running on port 3000");
