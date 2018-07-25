//when we require custom modules we have to put the path. No need to put .js extension 
//now Person is object. Can you only export objects?
var Person = require("./lib/Person");

//instantiating two objects
var ben = new Person("Ben Franklin");
var george = new Person("George Washington");


george.on('speak', function(said) {

	//template strings 
	console.log(`${this.name} -> ${said}`);

});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

//create an on event and use emit to call the event async
//built in on events? 
ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");
