const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    }, 
    lastname:{
        type: String,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    jobtitle:{
        tpye:String,

    },
    gender:{
        type:String,
    }

})

const user = mongoose.model("user", userSchema);

module.exports(user);