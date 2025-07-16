const http = require('http');
const {userRequestHandler} = require('./handler');

const server  = http.createServer(userRequestHandler);


// alert('hi');

const PORT = 3001;
server.listen(PORT , ()=>{
    console.log(`Server has started at port PORT ${PORT}`);


    
})