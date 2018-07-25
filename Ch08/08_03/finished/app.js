var express = require("express");
//cross origin resource sharing. Middle ware we can add to our application pipeline
var cors = require("cors");
var app = express();

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
//dictionary api is only allowed to serve data by requests made to it from the same domain name
//our application works because app is running on localhost:3000 and dictionary is also on 3000
//cors is a function, that will return middleware
//now any domain can make requests to our api
app.use(cors());

//take dictionary of terms, and serve it on the disctionary-api route. This is invoked when it is called from the dictionary.js files ajax call
//this sets up a get route. Like how http module had the req.method ==get
//same req, res as http, but express has powered them up. Ex: res.json can now auto stringify. Setting up headers, ect. 
//front end makes an ajax request for this route
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;