console.log("hey guyz how ar e you all i amdoing good");



const http = require("http");
const passport = require('passport');
const localstrategy = require('passport-local').Strategy;


const server  = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end("Welcome to the node.js first application");
}

);


server.listen(3000,()=>{
    console.log("server is running ");
});