const express = require('express');

const app = express()

// "/" is the home route
app.get("/",function(request,response){
    // console.log(request);
    // response.send("Hello");
    response.send("<h1>Hello world!!</h1>")
});//Action for any get request


app.get("/contact",function(req,res)
{
    res.send("<h1>Contact me at : jatin.dhall7385@gmail.com</h1>");
});

app.get("/about",function(req,res)
{
    res.send("<h1>Hello guys this is Jatin</h1>");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});//Listening to Port number 3000, to listen for http requests or so

