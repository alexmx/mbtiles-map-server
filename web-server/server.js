var express = require('express');
var app = express();

var SERVER_PORT    = 4444;
var APP_ROOT       = '/';
var PUBLIC_FOLDER  = '/public';

app.configure(function() {

	// Enable gzip compressing for responses
	app.use(express.compress());

	// Enable request logger
	app.use(express.logger());

	// Register public dir
	app.use(express.static(__dirname + PUBLIC_FOLDER));
});

app.listen(SERVER_PORT);
console.log("Listening on port: " + SERVER_PORT);