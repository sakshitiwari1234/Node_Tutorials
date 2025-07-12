const http = require('http');
const userRequestHandler = require('./server');


const server = http.createServer(userRequestHandler);




const PORT = 3000;
server.listen(PORT , ()=> {
    console.log(`server running at http://localhost:${PORT}`);
}); 