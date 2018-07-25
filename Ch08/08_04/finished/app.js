//very first thing to always do is npm install to install dependencies
//node-dev app "global module" to be used to run without manual installs
var express = require("express");
var cors = require("cors");
//help us parse data thats posted. If post from rest, its a json, if from form then its url-encoded
var bodyParser = require("body-parser");
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
//data sent to api as json
app.use(bodyParser.json());
//if body data was sent urlencoded. One option, if theres large amounts of nested data
app.use(bodyParser.urlencoded({ extended: false }));
//remember that this is all middleware, done in succession
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});
//handling the post request
app.post("/dictionary-api", function(req, res) {
    //pushes new term into the array
    skierTerms.push(req.body);
    res.json(skierTerms);
});
//route for the delete. filter function will display all the skier terms that DONT equal the double clicked 
app.delete("/dictionary-api/:term", function(req, res) {
    //javascript arrays have filter function. If theres 5 terms, call back function will be called 5 times
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;