var fs = require("fs");

//can use rename function to also move directories 


//read all files in logs directory.. javascript, can chain, first returns an array
fs.readdirSync("./logs").forEach(function(fileName) {

	//unlink files
	//cannot automatically recursively delete a directory 
	fs.unlinkSync("./logs/" + fileName);

});

//this will remove directory 
//cannot remove a directory unless it is empty, cannot contain files inside
fs.rmdir("./logs", function(err) {

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});