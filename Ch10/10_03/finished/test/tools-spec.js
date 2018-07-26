var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");
//mocha has concept called "hooks"
//these can be defined before/after stuff

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});

	describe("loadWiki()", function() {

		before(function() {
			//here is where the mock server is set up
			nock("https://en.wikipedia.org")
			    .get("/wiki/Abraham_Lincoln")
			    .reply(200, "Mock Abraham Lincoln Page");

		});

		it("Load Abraham Lincoln's wikipedia page", function(done) {

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				//test is limited to string on line 22. So we change the expectation to this
				expect(html).to.equal("Mock Abraham Lincoln Page");
				done();
			});

		});

	});

});


