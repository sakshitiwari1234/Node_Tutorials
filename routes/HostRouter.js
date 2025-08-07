// core modules
const path = require('path');

// external modules

// external mdoule
// external module means the modules to import , that we are importing are already present  ,and we just use them , they are inbuilt.

const express = require('express');
const bodyParser = require('body-parser');

const HostRouter = express.Router();



HostRouter.get("add-home", (req,res , next)=>{
   res.sendFile(path.join(__dirname,  '../views/add_home.html'));
});

HostRouter.post("add-home", (req,res , next)=>{
    
   res.sendFile(path.join(__dirname, '../views/homeadded.html'));
});

module.exports = HostRouter;