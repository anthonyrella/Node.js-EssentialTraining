//3 seconds, counted in milliseconds 
var waitTime = 3000;
//for when we start app
var currentTime = 0;
//fires callback every interval
var waitInterval = 10;
//added to function at start
var percentWaited = 0;

function writeWaitingPercent(p) {
	//clears all lines
	process.stdout.clearLine();
	//points cursor to beginning
	process.stdout.cursorTo(0);

	process.stdout.write(`waiting ... ${p}%`);
}

//setInterval is gloabl method
var interval = setInterval(function() {
	//indicator for how long we've been waiting
	currentTime += waitInterval;
	//calculates percent waited in interval 
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	//this writes it out
	writeWaitingPercent(percentWaited);
}, waitInterval);

//create delay of certain time, and then run callback function, hence the "waittime"
//setTimeout is global method
setTimeout(function() {
	//clearInterval is global. Used to stop interval. First needed to set a variable. Put it here as callback function is called after its interval 
	clearInterval(interval);
	//when we're done 
	writeWaitingPercent(100);
	console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
//called in beginning of app
writeWaitingPercent(percentWaited);