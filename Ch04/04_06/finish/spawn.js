var spawn = require("child_process").spawn;

//first argument is command to run in terminal
//second arg is array of all the things to run after node cmd
var cp = spawn("node", ["alwaysTalking"]);

//when theres data, this prints 
cp.stdout.on("data", function(data) {
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function() {

	console.log("Child Process has ended");

	process.exit();

});

//can send data to child process with standard input
//notice how stdin/stout are used on objects outside of process

setTimeout(function() {

	cp.stdin.write("stop");

}, 4000);

//can communicate with spawned processes with standard input and output 

