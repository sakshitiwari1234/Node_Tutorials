const http =  require('http');


const port  = process.env.PORT;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end("this is sakshi here , hi everyone");

})

server.listen(port,()=>{
   console.log( 'Server is listening on port ${port}');
})







