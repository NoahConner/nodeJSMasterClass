
// Dependencies
var http = require('http');
var url = require('url');

// serve
var server = http.createServer(function(req,res){

    // get the url and parse it
    var parsedUrl = url.parse(req.url, true);

    // get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Get the http method
    var method = req.method.toLowerCase();

    // get the headers as an object
    var headers = req.headers;

    // send the res
    res.end('Hello\n');

    // log the path
    console.log('Request recieved with these headers: '+ headers)
    
});

// start server on port 3000
server.listen(3000, function(){
    console.log('server is listening on port 3000');
})