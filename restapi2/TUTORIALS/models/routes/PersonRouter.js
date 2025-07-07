const express = require("express");
const router = express.Router();

router.put('/:id', (req,res)=>{
    try{

        const personid = req.params.id;
        const updatedpersondata =  req.body;
    
         const response = await personid.findByIdandUodate
    }catch{


    }
})