// console.log("hello node i will learn backend nicely now");



// 

http = require("node:http")

listener = function(request, response){
    // send tge http header
    // http sttus:200:0k
    // content type : text/html

    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('<h2 style= "text-align: center">      Hello world    </h2>');

};
server = http.createServer(listener);
server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

