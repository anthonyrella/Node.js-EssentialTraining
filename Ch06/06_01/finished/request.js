//note this is https, not http. But all the code would be identical 
//you can make a request to a site for information without requiring an api
var https = require("https");
//using file system for write file blah
var fs = require("fs");

//object literal of options . Details of request
var options = {
	//hostname aka domain, https default tends to be 443, not all the time though 
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

//both modules have a request function
//need to pass in options
//once the request has started..callback
//response object implements the stream interface
//response gets sent in as a stream
var req = https.request(options, function(res) {

	var responseBody = "";
	

	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode} `);
	//logging data as a json. Not putting it in template string
	console.log("Response Headers: %j", res.headers);

	//ensuring the string will come in as text
	res.setEncoding("UTF-8");

	//data events represent the data stream
	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		//chunks represent a string
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on("end", function() {
		//name of file, content, call back for errors 
		fs.writeFile("george-washington.html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});

});

//for any errors with request
req.on("error", function(err) {
	console.log(`problem with request: ${err.message}`);
});

//ends request..obviously 
req.end();

