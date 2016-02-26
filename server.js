// get the http module 
var http = require('http');
// get fs module
var fs = require('fs');
// create server
var server = http.createServer(function(request, response){
	// print the URL requested by the client
	console.log('client requested URL: ', request.url); 
	// valid URLs 
	if(request.url === '/') {
		fs.readFile('index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); 
			response.write(contents); 
			response.end(); 
		}); 
	} else if(request.url === '/stylesheets/style.css') {
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'}); 
			response.write(contents); 
			response.end(); 
		}); 
	} else if (request.url === '/ninjas') {
		fs.readFile('ninjas.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); 
			response.write(contents); 
			response.end(); 
		}); 
	} else if (request.url === '/dojos/new') {
		fs.readFile('dojos/new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); 
			response.write(contents); 
			response.end(); 
		}); 
	}
	// if no URLS match
	else {
		response.writeHead(404); 
		response.end('File not found!!!');
	}
}); 
// assign port to server 
server.listen(6789); 
// print message to window 
console.log("Running in localhost at port 6789");