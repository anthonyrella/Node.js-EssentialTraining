//always need filesystem module
var fs = require("fs");


//method to check if directory exists 
if (fs.existsSync("lib")) {
	console.log("Directory already there");
} else {
//needed to create the directory 
	fs.mkdir("lib", function(err) {

		if (err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}

	});

}

