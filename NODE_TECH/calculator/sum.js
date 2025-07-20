 const sumRequestHandler = (req,res) => {
    console.log("in sum request handler" , req.url);
    const body = [];
    
    req.on('data' , chunk => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end' , () =>{
       const bodyStr =  Buffer.concat(body).toString();
       const params = new URLSearchParams(bodyStr);
       const bodyObj = Object.fromEntries(params);
       const result = Number(bodyObj.num1) + Number(bodyObj.num2);
       console.log(result);
    })

    req.on();

}

exports.sumRequestHandler = sumRequestHandler;
