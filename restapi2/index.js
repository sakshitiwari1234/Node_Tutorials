const express = require("express");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

const userRouter = require('./routes/user');

//scehma ->

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
})
// connecting the monggose 
mongoose.connect("mongodb://127.0.0.1:27017/sakshi")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("mongo error ", err));

// const user = mongoose.model("user", userSchema);

// // routes 

// app.get('/api/users', (req,res) => {
//     return res.json(users);
// });

// app.get("/users", (req,res) => {
//     const html = `
//     <ul> 
//       ${users.map((user) => `<li> ${user.first_name}.join("") </li>`)}
//       </ul>
//     `;
//     res.send(html);
// })
// app.get("/api/users/:id" , (req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     return res.json(user);
// })
// app.post('/api/users:id', (req,res)=> {
//     // add the new user
//     res.json({status : "pending"})

// })
// app.patch("/api/users:id", (req, res) => {
//     // edit the usuer with id
//     res.json({status:"pending"})
// })

// app.post("/api/users", async(req, res) => {
//     const body = req.body;

//     if(
//         !body.firstName || !body.lastname || !body.email || !body.gender || !body.jobtitle
//     )
//     {
//         return res.status(400).json({msg: "alll fields are requirrrred.."});
//     }

//     const result = await user.create({
//         firstName:body.firstName,
//         lastname:body.lastname,
//         email: body.email,
//         gender: body.gender,
//         jobtitle:body.jobtitle,
//     });

//     console.log('result', result);
//     return res.status(201).json({msg:"success"});
// });

app.use("/user", useRouter);

app.listen(PORT , () => console.log("server started at port 8000"));





