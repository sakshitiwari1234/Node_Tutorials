const fs = require("fs");


// any operation can be performed in tow different manners- either it can be done in synronous manner or asynchronous manner.

// Blocking request to read contacts file.

// console.log('1');

// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

// console.log("2");


// performing the same things  usinng non-blocking requests. i.e asynronous tasks.


// console.log('1');

// const result = fs.readFile("contacts.txt", "utf-8", (err,result) => {
//     console.log(result);

// });
// console.log(result);

// console.log("2");

const os = require("os");

console.log(os.cpus().length);



 