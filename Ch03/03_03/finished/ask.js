var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = [];

function ask(i) {
	//stdout can write to term but does not do its own line spacing 
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  >  ");
}

//now app is running async. This event listener expects input
process.stdin.on('data', function(data) {

	//pushes to array
	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		//exits process 
		process.exit();
	}

});

//listens for exit event on process object 
process.on('exit', function() {

	process.stdout.write("\n\n\n\n");

	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

	process.stdout.write("\n\n\n\n");

});

ask(0);

