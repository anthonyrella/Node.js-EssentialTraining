var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order");

var sinon = require("sinon");

describe("Ordering Items", function() {

	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		this.console = {
			log: sinon.spy()
		};

		this.warehouse = {
			//yield will invoke the callback. And we add the args to pass to that callback
			packageAndShip: sinon.stub().yields(10987654321)
		};

		order.__set__("inventoryData", this.testData);
		order.__set__("console", this.console);
		//inject our mock warehouse 
		order.__set__("warehouse", this.warehouse);

	});

	it("order an item when there are enough in stock", function(done) {

		var _this = this;

		order.orderItem("CCC", 3, function() {

			expect(_this.console.log.callCount).to.equal(2);

			done();
		});

	});

	//nest another test suite
	describe("Warehouse interaction", function() {

		beforeEach(function() {
			//now we can check to make sure that this.callback is called with the correct data 
			this.callback = sinon.spy();
			//dont actually run a callback, just have a spy check it
			order.orderItem("CCC", 2, this.callback);

		});
		//if order was successful, callback should have been invoked, if callback was invoked then this number should be true
		it("receives a tracking number", function() {
			expect(this.callback.calledWith(10987654321)).to.equal(true);
		});

		it("calls packageAndShip with the correct sku and quantity", function() {
			expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
		});

	});


});