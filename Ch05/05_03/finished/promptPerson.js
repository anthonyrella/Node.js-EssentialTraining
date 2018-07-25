var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//need file system to create the markdown and write to it
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};

//built in read line method
rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	//this app only has one user that runs in terminal, so no blocking. 
	//name and contents of file. Template string 
	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n==================\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

		//adding to md file 
		fs.appendFileSync(realPerson.name + ".md", `* ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
