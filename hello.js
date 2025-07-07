console.log("hey there i am js student studying nodejs");

// to run the following code to run a javascript file througb node, you can write node and file name.

// now- Node.js is a run time environment for Node.

// console.log(window)

// node js doesn't provide all the features aand commands to run such as window or alert.

// now we have studied how to run node js file in our vs code environment.

// command to run the same file - npm -v 
// this runs the command and gives version of it.

// now the main part is here , node js is commonly used to iinstall some dependesicies and packages inside our environment which can be written manually but there are mosre chances of error and mistakes, therefore in order to ruun a particular file nicely by just initiatiing a given name , insteead of calling file name again and again , we use 

// npm-init command.

// what does this command do ??

// this command...


// npm-init - > this creates a configuration file which makes a new file names pakage.json 

// whatevr dependeicies and needs are install are automiatically uopdated in this file.




// therefore this package.json file is automatically created using the command  - npm init.

console.log("hello js i am sakshi tiwari")

// modules in js are packages that are installed to perform .

// function add(a,b){
//     return a+b;
// }

// ----------------------------------------------------------------------------------------------------------------------------

/*


MODULE/ PACKAGES.

-> as we import different header files and libraries in other language to perfrom a particular function , same in this node.js javascript , we can call other file or modules which are inside our vs code environment.

now, as i have made math.js for calculation and want to call function written there to be used in my home file. i will call this by - 

find the file or module inside your current directory - by placing , "./";


*/

const math = require("./math.js");



console.log(math);

console.log("math value is", math.addfn(2,4));


module.exports = {add,sub};




