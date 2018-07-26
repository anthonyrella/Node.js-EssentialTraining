var expect = require("chai").expect;
var tools = require("../lib/tools");

//describe statements can be nested
describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});

	//another suit for the async request
	describe("loadWiki()", function() {
		//this ups the time out so mocha will wait. Typically the default is 2 seconds 
		this.timeout(5000);

		//whenever we do async we should put in a done variable to the callback, so that mocha knows to wait
		it("Load Abraham Lincoln's wikipedia page", function(done) {

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.be.ok;
				//need to add this. By dfault it waits for 2 seconds
				done();
			});

		});

	});

});


