var expect = require("chai").expect;
//need rewire to require SUT. Gives us a way to inject this data
var rewire = require("rewire");

//pulling in our SUT. Using rewire to do this so that it has access to the private variables in that module
var order = rewire("../lib/order");

//test suite
describe("Ordering Items", function() {

	//hook. Add code to execute before each test
	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		order.__set__("inventoryData", this.testData);

	});

	//stub our test. 
	it("order an item when there are enough in stock", function(done) {

		order.orderItem("CCC", 3, function() {
			done();
		});

	});

});