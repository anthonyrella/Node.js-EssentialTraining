var fs = require("fs");
//create a new markdown file. Using string template with backticks. They honor whitespace 
var md = `

Sample Markdown Title
=====================

Sample subtitle
----------------

* point
* point
* point

`;

//writes this text to a file. Async. Name of file, content + trim, callback
fs.writeFile("sample.md", md.trim(), function(err) {

	console.log("File Created");

});