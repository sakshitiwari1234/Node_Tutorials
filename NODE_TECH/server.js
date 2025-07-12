// making our first server with full explanation.

const http = require('http');
const fs = require("fs");


// function server(req,res){
//     console.log(req);

// }

// http.createServer(server);


const userRequestHandler = ((req , res) => {
    console.log(req.url , req.methods);



    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
    res.write('</html>');

    res.write('<head><title> Complete coding </title></head>');
    res.write('<body><h1> Enter Your Details</h1> ');
    res.write('<form action = "/submit_details" method = "POST">');
    res.write('<input type="text" name = "username" placeholder  ="enter ur name" > <br>');
    res.write('<label for = "male"> Male</label>');
    res.write('<input type="radio" name = "gender" value = "male"  > <br>');

     res.write('<input type="radio" name = "gender" value = "female"  > <br>');

     res.write('<input type = "submit" value = "submit">')

    res.write('</form>');
    
    
    res.write('</body>');
    res.write('</html>');
    res.end();

    } else if(req.url.toLowerCase() === "/submit_details" && req.method ==="POST")
        {

            
            // reading the chunks that is reading the data sent by server from client.
            const body = [];
            req.on('data', (chunk)=>{
                console.log(chunk);
                body.push(chunk);
            });
            // now this chunk will print the data sent in form , as a buffer. therefore we are converting the dta in buffer to read it in human language.
            
            // making another event when all data has been come.
            req.on('end' , ()=>{
                const fullBody = Buffer.concat(body).toString();
                console.log(fullBody);
                const params = new URLSearchParams(fullBody);
                // const BodyObject = {}; 
                
                // for (const [key , val] of params.entries()){
                //     BodyObject[key] = val;

                // }
                const BodyObject = Object.fromEntries(params);
                console.log(BodyObject);
                fs.writeFileSync('user.txt',JSON.stringify(BodyObject) );



            })

            // Parsing the full body to decode the data we have got.

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            
    }
    else if(req.url === '/products'){
        res.setHeader('Content-Type', 'text/html');
    res.write('</html>');

    res.write('<head><title> Complete coding </title></head>');
    res.write('<body><h1> Welcome , Check Our Products </h1> </body>');
    res.write('</html>');
    return res.end();

    }else{
    res.setHeader('Content-Type', 'text/html');
    res.write('</html>');

    res.write('<head><title> Complete coding </title></head>');
    res.write('<body><h1> WElcome to sakshi tiwari server </h1> </body>');
    res.write('</html>');
    res.end();
    return res.end;
    }
});


module.exports = userRequestHandler;



//this is called as making our own modules - by creating server on main file and making modules files for different work related task , different handlers.



