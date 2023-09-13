
// Dependencies
var http = require('http');

// serve
var server = http.createServer(function(res,res){
    res.end('Hello\n');
});

// start server on port 3000
server.listen(3000, function(){
    console.log('server is listening on port 3000');
})