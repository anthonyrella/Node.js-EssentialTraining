var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

//creating write stream to write to file. No longer need previous write file method
	var stream = fs.createWriteStream(realPerson.name + ".md");

	stream.write(`${realPerson.name}\n==================\n\n`)

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

	
		

		if (saying.toLowerCase().trim() === 'exit') {
			//close the write stream
			stream.close()
			rl.close();
		} else {

			realPerson.sayings.push(saying.trim());

			//appen to the write stream
			stream.write(`* ${saying.trim()} \n`);

			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
