// // db.js is essential because it helps to make the connectivity of database with our database using mongoose


// const mongoose = require('mongoose');


// //Define the mongosb connection URL

// const mongoURL = 'mongodb://localhost:27017/hotels'

 const mongoose = require("mongoose");


 // connecting with mongoDB url 

const mongoURL =  'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("connected to mongodb server");
});

db.on('error', (err)=>{
    console.log("mongo connection error", err);
});

db.on('disconnected', () => {
    console.log("mongodb disconnected");
});

// exporting the mongodb connection in server file











