const {sumRequestHandler} = require('./sum');
//curly braces mean that we are destructuring the imported handler.

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') 
    {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write('<head> <title>Practising my way</title></head> ');
        res.write('<body> ');
        res.write("<h1> Hi wonderful Peoples");
        res.write('<br>');
        res.write('<h1>Welcome </h1>');
        
        res.write("<a href='/calculator'> Go To Calculaotro by clicleking here</a>");

        // res.write();
        res.write('</body>');

        res.write("</html>");

        return res.end();

}  else if (req.url.toLowerCase()=== "/result" && req.method === "POST"){
   
    return sumRequestHandler(req,res);

}
 else if (req.url.toLowerCase() === '/calculator'){
        // res.setHeader('Content-Type', 'text/html');
       res.write('<html>');
    res.write('<head>');
    res.write('<title>Calculator</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Welcome to Calculator</h1>');
    res.write('<form action="/result" method="POST">');
    res.write('<input type="number" name="num1" placeholder="Enter first number" required><br><br>');
    res.write('<input type="number" name="num2" placeholder="Enter second number" required><br><br>');
    res.write('<button type="submit">Calculate</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');


        
        
        res.end();
    }
    else {
    res.setHeader('Content-Type', 'text/html');
        res.write(`
    <html>
    <head><title> practise calculator </title></head>
    <body>
    <h1> 404 Not Found </h1>
    <a href= " /" > Go to home</a>;

    </body>
    </html> ` );

    res.end();
        }
}

       












exports.userRequestHandler = userRequestHandler;
