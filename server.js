/*Writing the server module
*/
//grab the http module and make it available through var http.
var http = require('http');
var url = require('url');
//createServer is a method of the http module which we use down here
function start(route, handle){
//We are passing an annonymous function as argument to http.createServer
// http.createServer(function(req,res){}) will return an object and this object has a method called listen (last line)
http.createServer(function(req,res){
//once a http request is made this call-back function is executed
//the two paraments passed are REQ and RES, these are objects.
//Mehods of REQ & RES objects can be used to handle details of HTTP request.

  var pathname = url.parse(req.url).pathname;

  console.log("Requested for:" + pathname + " received")
//log bellow is executed everytime a page is requested
  var content = route(handle, pathname);

  //once request is received res.writeHead sends a http status of 200 with Content-Type
  res.writeHead(200, {"Content-Type": "text/plain"});

  // res.write sends "hello World" in the http response body.
  res.write(content);

  // res.end finishes the respose.
  res.end();

}).listen(8888);

//this log will execute as soon as the server starts running BEFORE the call-back function runs.
console.log("server is now running");
}

exports.start=start;
