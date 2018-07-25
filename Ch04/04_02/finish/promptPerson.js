var readline = require('readline');

//create instance with variable. Create the interface with the process objects
var rl = readline.createInterface(process.stdin, process.stdout);

//used to store info received from user. Object with an empty array
var realPerson = {
	name: '',
	sayings: []
};

//ask a question with readline. Function is invoked once we have answer from terminal. App still runs because we havent told readline to close 
rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	//use readline to set a prompt, to ask a question over and over again
	rl.setPrompt(`What would ${realPerson.name} say? `);

	//displays the prompt 
	rl.prompt();

	//listens for new line. Event fires when user submits answer. Callback is invoked once we have answer 
	rl.on('line', function(saying) {

		//pushes answer into sayings array in realperson object
		realPerson.sayings.push(saying.trim());

		if (saying.toLowerCase().trim() === 'exit') {
			//closes readline instance 
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});

//listens for close event. Remember to look at the type of events each module includes 
rl.on('close', function() {

	//%s is a placeholder for a string. %j replaces a json string (im assuming an array can be viewed as a json)
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	//exits process. Stops application
	process.exit();
	
});



