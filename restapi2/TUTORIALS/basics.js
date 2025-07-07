console.log("helllo guyz i am learning node js for third time from sractch.");


// writing my first node js application.

// i am creating a simple http server.

const http = require('http');

const server = http.createServer( (req,res) => {
    res.write("hello world how are you");
    res.end();
});

passport.use(new Localstrategy(async (username, password , done)=>{
    try{

        console.log('Recieved credentials', username, password);
        const user = personalbar.findOne({username: USERNAME});
        if(!user){

            return done(null,false,{message:"incorrect username"});

         const isPasswordMatch = user.password === password ? true:false;
         if(isPasswordMatch){
            return done(null,user);
         }else{
            return done(null,false, {message: "incrrect password"});

         }
        }
    }
}));



app.get('/',function(req,res){
    res.send("welcome to our hotel");
})

app.use('/person', personRoutes);
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});




