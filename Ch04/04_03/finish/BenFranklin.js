//pulling the event emitter constructor right out of the require. Set variable to constructo
var EventEmitter = require('events').EventEmitter;
//used for inherit. Way to add an object to the prototype of an existing object 
var util = require('util');


//var events = require('events');
//below is a constructor
//var emitter = new events.EventEmitter();

//making a custom event , callback function is where the logic lies
//emitter.on('customEvent', function(message, status){

//template strings . Called asynch
//console.log(`${status}: ${message}`)
//});

//trigger or emit custom event
//emit function, event name, args that get passed to callback function
//emitter.emit('customEvent', "Hello World", 200)

//event emitter is rarely used as a standalone object. Allow objects to inherit event emitter

//javascript objects are functions. Create constructor function for object
//create instance of person, person will have name prop
var Person = function(name) {
	this.name = name;
};

//adds eventEmitter to Person prototype. If you create person it will have the emit function, and can listen to custom events 
util.inherits(Person, EventEmitter);

//instantiate person
var ben = new Person("Ben Franklin");


//create custom event
ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});

//call custom event
ben.emit('speak', "You may delay, but time will not.");
