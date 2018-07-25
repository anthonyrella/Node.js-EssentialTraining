var path = require('path');
//util has a log function. 
var util = require('util');

//information about memory usage. Node built on chromes v8 processor
var v8 = require('v8');

//pluck out base file from full path 
util.log( path.basename(__filename) );

//path.join creates the directory comma delim
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

//adds a date and time stamp
util.log(dirUploads);

//current memory statistics 
util.log(v8.getHeapStatistics());

