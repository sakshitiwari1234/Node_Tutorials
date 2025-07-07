// how to make a server in node js.

// Server -> person who interacts with clients. it allows the interaction between client side and server 

// Json data format is mostly presented as a form of string.


// {
//     "name": "Sakshi",
//     "age": 23,
//     "college": "SATI"
// }

// jsonobject = json.parse(jsonfilename)

// console.log("sakshi");

// const object ={
//     name: "sakshi",
//     age: 25
// };

// const json = JSON.stringify(object);

// console.log(json);



// console.log(typeof json);

const express = require('express');
const db = require('./db');
const person = require('./models/person');
// const MenuItem = require('./models/MenuItem');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());





app.get('/',function (req,res) {
    res.send("hey your server is running successfully.");

});


app.get('/chicken', (req,res)=>{
    res.send("sure sr, i would love to serve chicken.")
})

app.get('/idli', (req,res)=>{
    var idli = {
        name:"rava idli masttt",
        is_sambhar : true,
        size: 'full size',
        is_chutney :true
    }
    res.send(idli);
    res.send("hey there i need some idli with dosa bada");

})


//routing and working with parametrized url

app.get('/person/:worktype', async(req,res)=>{
    try{
    const worktype = req.params.worktype;  // extracting the worktpye from url parameter
    if( worktype== 'chef' || worktype == 'manager' || worktype == 'waiter'){
            
        const response = await person.find({work: worktype});
        console.log('response fetched');
        res.status(202).json(response);
    }else{
        res.status(404).json({error: 'Invalid work type'});
    }
}catch(err){
    console.log(err);
    res.status(500).json({error: "itnernal server erorror"});


}
});

app.listen(PORT =3000 , () =>{
    console.log("hey there , you're server has started at 3000.");
});



console.log("node js is working right here.");

// database 



















