// what is file handling ?


const fs = require('fs');
require('dotenv').config();

// fs.writeFileSync('./test.txt', "hey there how are you");


// sync here means that it was a syncronous call.


// Asyncronous function.
fs.writeFileSync('./tests.txt', "how are you ? i am good bro", (err, result) => {

    if(err) {
        console.log("error", err);

    }else{
        console.log(rrsult);
    }
});

const result = fs.readFile("./contacts.txt", "utf-8");
console.log(result);






