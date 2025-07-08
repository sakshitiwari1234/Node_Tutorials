// making our first server with full explanation.

const http = require('http');


// function server(req,res){
//     console.log(req);

// }

// http.createServer(server);


const server = http.createServer((req , res) => {
    console.log(req);
});

const PORT = 3000;
server.listen(PORT , ()=> {
    console.log(`server running at http://localhost:${PORT}`);
});


