//import file system
var fs = require("fs");

//this is how we rename, 1st = file we want to rename, 2nd = new name
fs.renameSync("./lib/project-config.js", "./lib/config.json");
//if any problems error will be thrown
console.log("Config json file renamed");
//moving it with rename function, this time async 
fs.rename("./lib/notes.md", "./notes.md", function(err) {

	if (err) {
		console.log(err);
	} else {
		console.log("Notes.md moved successfully");
	}

});