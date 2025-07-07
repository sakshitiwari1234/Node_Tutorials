const express = require("express");

const router = express.router;


router.get('/', (req,res) => {
    return res.json(users);
});

router.get("/", (req,res) => {
    const html = `
    <ul> 
      ${users.map((user) => `<li> ${user.first_name}.join("") </li>`)}
      </ul>
    `;
    res.send(html);
})
router.get("/" , (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
})
router.post('/', (req,res)=> {
    // add the new user
    res.json({status : "pending"})

})
router.patch("/", (req, res) => {
    // edit the usuer with id
    res.json({status:"pending"})
})

router.post("/", async(req, res) => {
    const body = req.body;

    if(
        !body.firstName || !body.lastname || !body.email || !body.gender || !body.jobtitle
    )
    {
        return res.status(400).json({msg: "alll fields are requirrrred.."});
    }

    const result = await user.create({
        firstName:body.firstName,
        lastname:body.lastname,
        email: body.email,
        gender: body.gender,
        jobtitle:body.jobtitle,
    });

    console.log('result', result);
    return res.status(201).json({msg:"success"});
});

models.export = router;
