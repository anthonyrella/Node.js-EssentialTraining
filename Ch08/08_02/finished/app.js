//creating express app. Need to require it. No need to include a path when install node packages. 
var express = require("express");

//need to create an app instance. Need to add middleware to this application. Customized plugins to use with express. App is the app instance 
var app = express();

//a little middleware
//whenever thers a request, app will first use this middle ware function, then the static
//middleware = 3 args. Request, response and next.
//adding functionality to pipeline. Trickle down all the app.use before returining response
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	//in order to tell our application to move on to the next piece of info in the pipeline, we use next()
	next();
});

//static file server that comes with express. Function takes in the directory of where the static files are located
app.use(express.static("./public"));

//now the app will listen on this port
app.listen(3000);

console.log("Express app running on port 3000");

//not needed for this app to run, but its good practice. 
module.exports = app;

//we will get error because dictionary-api isnt in project yet. Front end js is making an ajax request to get it