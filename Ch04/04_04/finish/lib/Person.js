//reusable module. variables created are local to this module. 
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

//javascript object, how you expose the variables to other javascript files. Can dot notate, bracket notate, set it to object library or any javascript type 
//object that is returned by the require statement. When module is required Person is returned 
module.exports = Person;