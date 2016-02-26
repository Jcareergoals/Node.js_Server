// get the http module 
var http = require('http');
// get fs module
var fs = require('fs');
// create server
var server = http.createServer(function(request, response){
	// print the URL requested by the client
	console.log('client requested URL: ', request.url); 
	// urls will be added after this 

}); 
// assign port to server 
server.listen(6789); 
// print message to window 
console.log("Running in localhost at port 6789");