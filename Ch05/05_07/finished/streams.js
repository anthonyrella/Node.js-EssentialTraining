//to read chat log, require filesystem
//to create a readable stream
var fs = require("fs");

//bad way = 
//fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
//console.log(`File Read ${chatlog.length}`)
//})
//console.log("Reading File")
//aysnc will buffer the file first, before invoking callback
//better implementation might be creating a readable stream

//good to use for reading large files
var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

//this is called on very first data event 
stream.once("data", function() {
	//occurs once
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});

//when data event is raised we have a chunk, not the full file
stream.on("data", function(chunk) {
	//turns out theres 65 hundred pieces of data per each chunk
	process.stdout.write(`  chunk: ${chunk.length} |`);
	//concatenating each chunk
	data += chunk;
}); 

//listener for when stream is finished 
stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
});


