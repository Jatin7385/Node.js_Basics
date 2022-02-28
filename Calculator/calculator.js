//Body Parser is used to access the data sent to the post request
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));//urlencoded is used when we are trying to pass data coming from an html form


//*************Code for / route****************** */
//To send an entire html page, we use res.sendFile()
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res)
{
    console.log("Post request body :- ");
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is : " + result);
});


//**********Code for /bmicalculator route*************** */
app.get("/bmicalculator",function(req,res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res)
{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = (weight/(height*height*10000));
    res.send("Your BMI is " + bmi);
});

app.listen(3000,function()
{
    console.log("Server started at Port 3000")
});