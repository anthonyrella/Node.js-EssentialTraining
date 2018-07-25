//still need in the include
var fs = require("fs");

try {
	//removes sync 
	//if you dont want code to throw error with a sync request, you need a try catch block 
	fs.unlinkSync("./lib/config.json");
} catch (err) {
	console.log(err);
}

//removes async 
fs.unlink("notes.md", function(err) {

	if (err) {
		console.log(err);
	} else {
		console.log("Notes.md removed");
	}

});



