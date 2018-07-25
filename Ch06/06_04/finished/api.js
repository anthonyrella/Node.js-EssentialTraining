//for api server, http module is required, also maybe need json data
var http = require("http");
//can also require json files, with the common javascript require function
var data = require("./data/inventory");
//creating server here, chaining it with listen 
http.createServer(function(req, res) {
	//if requesting homepage, return all data
	if (req.url === "/") {
		
		res.writeHead(200, {"Content-Type": "text/json"});
		//stringify converts json into string
	    res.end(JSON.stringify(data));
	} else if (req.url === "/instock") {
		//providing some routes
		//just returning the instock data
		listInStock(res);
	} else if (req.url === "/onorder") {
		//returning the onorder data
		listOnBackOrder(res);
	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops... Data not found");
	}

	

}).listen(3000);

console.log("Server listening on port 3000");

//creating these functions that take the response object
//data is array
//filter function filters array for specific details. Call back function is invoked once for every item in array
//function is referred to as a predicate: only return true or false
//if items equal that, those items will be added to the new inStock array
//if items dont equal that they are filtered out of that array
function listInStock(res) {

	var inStock = data.filter(function(item) {
		return item.avail === "In stock";
	});

	res.end(JSON.stringify(inStock));

}

function listOnBackOrder(res) {

	var onOrder = data.filter(function(item) {
		return item.avail === "On back order";
	});

	res.end(JSON.stringify(onOrder));

}