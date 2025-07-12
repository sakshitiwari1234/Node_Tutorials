// making our first server with full explanation.

const http = require('http');
const fs = require("fs");


// function server(req,res){
//     console.log(req);

// }

// http.createServer(server);


const server = http.createServer((req, res) => {
    console.log(req.url, req.methods);



    //     if (req.url === '/'){
    //         res.setHeader('Content-Type', 'text/html');
    //     res.write('</html>');

    //     res.write('<head><title> Complete coding </title></head>');
    //     res.write('<body><h1> Enter Your Details</h1> ');
    //     res.write('<form action = "/submit_details" method = "POST">');
    //     res.write('<input type="text" name = "username" placeholder  ="enter ur name" > <br>');
    //     res.write('<label for = "male"> Male</label>');
    //     res.write('<input type="radio" name = "gender" value = "male"  > <br>');

    //      res.write('<input type="radio" name = "gender" value = "female"  > <br>');

    //      res.write('<input type = "submit" value = "submit">')

    //     res.write('</form>');


    //     res.write('</body>');
    //     res.write('</html>');
    //     res.end();

    //     } else if(req.url.toLowerCase() === "/submit_details" && req.method ==="POST")
    //         {
    //             fs.writeFileSync('user.txt', "Sakshiiiii Tiwari");
    //             res.statusCode = 302;
    //             res.setHeader('Location', '/');
    //             return res.end();

    //     }
    //     else if(req.url === '/products'){
    //         res.setHeader('Content-Type', 'text/html');
    //     res.write('</html>');

    //     res.write('<head><title> Complete coding </title></head>');
    //     res.write('<body><h1> Welcome , Check Our Products </h1> </body>');
    //     res.write('</html>');
    //     return res.end();

    //     }else{
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('</html>');

    //     res.write('<head><title> Complete coding </title></head>');
    //     res.write('<body><h1> WElcome to sakshi tiwari server </h1> </body>');
    //     res.write('</html>');
    //     res.end();
    //     return res.end;
    //     }
    if(req.url === '/Home'){
        res.write("HEY BRUH WElcome to home back");
        res.end();
    }
    if(req.url ==='/Projects'){
        res.write("EXPLREEEE AND MAKE NEW PROJECTS");
        res.end();
    }

    
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write('<head> <title>Practising my way</title></head> ');
        res.write('<body> ');
        res.write("<h1> Hi wonderful Peoples");
        res.write('<nav>');
        res.write("<a href='/Home'>Home </a>");
        res.write("<a href='/Projects'>Projects</a>");
        res.write("<a href='/About'>About</a>");
        res.write("<a href='/Contacts'> Contacts </a>");

        res.write("</nav>");
        // res.write();
        res.write('</body>');
        res.write("<h1> Hello World </h1>");
        res.write("</html>");
        
    

    
});



const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});

