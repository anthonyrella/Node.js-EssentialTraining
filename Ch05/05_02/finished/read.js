//in order to read files
var fs = require("fs");
//help us deal with filepaths
var path = require("path");

//to read files //second argument is text encoding utf-8 is text
//var contents = fs.readFileSync("./lib/sayings.md", "UTF-8")
//console.log(contents)
//with no second arg, you get binary. Binary in node.js gets handled with buffer class


//read contents on library directory 
fs.readdir("./lib", function(err, files) {

	//array. Loop through each. Call back function, each file gets passed to it
	files.forEach(function(fileName) {
		//create a full path to current file inside of the library directory
		var file = path.join(__dirname, "lib", fileName);
		//creates statistics for file 
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store") {

			//file, encoding, call back function
			//if you throw error, process gets killed
			//if you log error process isnt killed and user learns what happened 
			fs.readFile(file, "UTF-8", function(err, contents) {

				console.log(contents);

			});

		}
	});

});