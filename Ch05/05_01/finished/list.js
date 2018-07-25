//file sys module 
var fs = require("fs");

//sync call below. Synchronously, using blocking, blocks the single node.js thread.  can use async . 
//var files = fs.readdirSync('./lib');
//console.log(files)
//node list to run
//files have extension, subdirectories do now 

//this is async. Puts in request, when it is finished callback is invoked . Error is first arg, files second 
fs.readdir('./lib', function(err, files) {

	if (err) {
		throw err;
	}

	console.log(files);

});
//single nature thread will probably run this after readdir call. API for file system every method has sync and async 
console.log("Reading Files...");
