// const http = require("http");
// const fs = require("fs");
// const myserver = http.createServer((req,res)=>{
//     const log = `${Date.now()}: New Req Recieved`;
//     fs.appendFile("log.txt",log (err , data)=>{
//         console.log("new request recieved");
//         res.end("hello from server again");

//     } );
// });



// myserver.listen(8000, () => console.log("server started!."));

// 1st step - npm init to install pakacage MediaSourceHandle.apply


const http = require("http");
// const url = require("url");
// const fs = require("fs");
const express = require("express");



const app = express();

app.get('/', (req,res) => {
    return res.send("hello from homepagee" + "hey"+ req.query.name );
})


app.get("/about", (req,res) => {
    return res.send("hello fomr about page");
})
const myserver = http.createServer(app);
//     if (req.url === "favicon.ico") return res.end();
    
//     const log = `${Date.now()}: ${req.method} ${req.url} New request recieved`;
//     const myUrl = url.parse(req.url);
//     console.log(myUrl);
//     fs.appendFile('log.txt', log, (err,data) => {
//         switch (req.url){
//             case "/":
//                 res.end("Homepage");

//         }
//         // console.log(req);
//         res.end("hello from server ending now");

// });


// }); // this will make my server 


myserver.listen(8000, ()=> console.log("Server Started"));

 







