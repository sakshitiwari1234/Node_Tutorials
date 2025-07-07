const fs = require('fs');
// fs is a module that is used to hadnle files. it is an already built in pacakge in node js.

// Syncronous call tha ye , and we have given  a new path

// fs.writeFileSync('./test.txt', 'hey there new file created using fs module right');


// fs.writeFile('./tests.txt', "hello", (err) => {});

// blocking task adn non blocking task

const result = fs.readFileSync('./contacts.txt', "utf-8");

console.log(result);



// if we are reading a file using synrochnous prograamiing then , we cannot store it in variable and it doesn't return anything for sure. but in asyncrnous file system handling , we definately need to to store in some variable and then return it in order to run the the command.
fs.readFile("./contacts.txt","utf-8", (err,result) => {
    if(err) {
        console.log("error", err);
    }else{
        console.log(result);

    }
} )




// blocking and non- blocking s

fs.appendFileSync("./test.txt",`${Date.now()}hey there heloo back`);

// fs.cpSync("./test.txt" , "./copy.txt");

fs.unlinkSync("./copy.txt");


console.log(fs.statSync('./test.txt').isFile());


fs.mkdirSync("my-docs");



fs.mkdir("my-docs")






