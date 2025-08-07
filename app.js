//core modules
const path = require('path');

// external mdoule
// external module means the modules to import , that we are importing are already present  ,and we just use them , they are inbuilt.

const express = require('express');
const bodyParser = require('body-parser');


// local modules....

const userRouter = require('./routes/UserRouter')

const HostRouter = require('./routes/HostRouter');
const rootDir = require("./utils/pathUtil")
// local modules means that , the routes that we are building inside our root directory and importing them from specific folder inside our project. 



const app = express();
app.use(express.urlencoded()); // this is middleware.
app.use((req,res, next) => {
    console.log(req.url, req.method);
    next();
})    // this is middleware

app.use(userRouter);    // tHIS IS THE ROUTER WE HAVE USED TO MAKE SURE THAT TTHE CODE WHICH WE HAVE WRITTEN IN ANOTEHR FILE FOR THE WEBPAGE HOME , IS NOW ACCESIBLE BY WRITING APP.USE AND PASSING THE FILE NAME FOR SAME.
app.use(HostRouter);

// IF USING ALL THE ROUTES THERE ARE STILL, SOMEBODY ACCESSING ANY URL , THEN WE SHOULD USE 
app.use((req,res , next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


// moving this route from here because i have made it in another file

// app.get("/" , (req,res,next)=>{
//     res.send(
//         `<h1>Welcome to airbnbb sirrrrrrrrrr</h1>
//         <a href= "/add-home"> Add Homee sir</a> 
//         `
//     )

// })..





const PORT = 2000;

app.listen(PORT, () =>{
    console.log(`Server is running on Adresss http://localhost:${PORT}`);

})

// how to add 404 page.










