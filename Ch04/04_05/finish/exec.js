//contains execute function
var exec = require("child_process").exec;

//this now can execute things like you would do in the terminal 
//these i guess are called child-processes 
//call back function receives the information back from the exec 
//errors, and then the standard output from the exec function
exec("git version", function(err, stdout) {

	if (err) {
		throw err;
	}

	console.log("Git Version Executed");
	//prints the output from the execute 
	console.log(stdout);

});
