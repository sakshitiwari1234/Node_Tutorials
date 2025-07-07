const mongoose = require('mongoose');

//Defining the person schema 

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true


    },
    age:{
        type: Number,
        required:true 
    },
    work:{
        type: String,
        enum:["chef", "waiter", "manager"],
        required:true 
    },
    mobile: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required:true,

    },
    salary:{
        type:Number,
        requirred:true,
        unique: true
    }

});

const person = mongoose.model('person', personschema);
module.exports = person;

