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



    } else if (req.url.toLowerCase() === '/calculator'){
         res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write('<head> <title>Practising my way</title></head> ');
        res.write('<body> ');
        res.write("<h1> Hi wonderful Peoples");
        
        // res.write();




        // dfgnflsfldsflsfjsdlfjlsfxvxv

        res.write("Here is the calculator");
        res.write("form  action = '/result'");
        res.write("<input type = 'text' placeholder = 'FirstNum' name ='first'> firstnumber </input>");
        res.write("<input type = 'text' placeholder = SecondNum' name ='second'> secondnum </input>");
        res.write("</form>");
        res.write('</body>');
        res.write("<h1> Hello World </h1>");
        res.write("</html>");
        
        
    }

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
       












exports.userRequestHandler = userRequestHandler;
