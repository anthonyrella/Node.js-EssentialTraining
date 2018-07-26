//expect function of the chai assertion engine. Can also use "should" and "assert"
var expect = require("chai").expect;

var tools = require("../lib/tools");

//test suite called Printname().
describe("printName()", function() {

	//each test
	it("should print the last name first", function() {

		//when we write a test we simply want to invoke the tool that we are testing
		//tools.printname is an example of a class.function we would test from another class
		//send this function an object
		var results = tools.printName({ first: "Alex", last: "Banks"});

		//this is the expectation. Fails at first. We need to "stub" the function that we want to test 
		expect(results).to.equal("Banks, Alex");

	});

});