var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order");
//needed to this thing. We want to make sure console logs are being called, without actually having to log to the console
var sinon = require("sinon");

describe("Ordering Items", function() {

	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		this.console = {
			//details about the log
			log: sinon.spy()
		};

		order.__set__("inventoryData", this.testData);
		//set to fake console. 
		order.__set__("console", this.console);

	});

	it("order an item when there are enough in stock", function(done) {
		//needed for scope
		var _this = this;

		order.orderItem("CCC", 3, function() {
			//Check to make sure those consoles are actually called 
			expect(_this.console.log.callCount).to.equal(2);

			done();
		});

	});

});