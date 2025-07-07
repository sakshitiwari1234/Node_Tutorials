// creating a model for the  menu

const mongoose = require("mongoose");

const menuitemschema  = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    taste : {
        type : String,
        enum:['Sweet', "Spicy", "Sour"],
        required: true,
    },
    is_drink: {
        type: Boolean,
        defualt: false
    },
    ingrdeients:{
        type: [String],
        defualt: []
    },
    num_sales : {
        type: Number,
        default: 0,
    }


})

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;

