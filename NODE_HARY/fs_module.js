const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err,data)=>{
    console.log(err,data)
})

const a = fs.readFileSync("file.txt")
console.log(a.toString())
console.log("finised reading the file now");

fs.writeFile("file2.txt", "This is a data", ()=>{
    console.log("hey there, kudos to your winnings keep doing your best alwayss");
})

b= fs.writeFileSync("file2.txt", "this is a data second dsata");
console.log(b)
console.log("finished writing in a file");


console.log("the callout function");

const emit = require('myEmitter');

// .. event emitter is used to perform some event based on some conditons and it is an async operation which is performed in asyncronous times , and the code is also written for trigger this and perform.

