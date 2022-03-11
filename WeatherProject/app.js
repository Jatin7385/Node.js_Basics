const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res)
{
    const query = req.body.cityName
    console.log(query)
    console.log("Post request received");


    const apiKey = "b908de4b0e6671569eb0e003b65d00f8"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data)
        {
            const weatherData = JSON.parse(data);
            console.log(weatherData)
            const temp = weatherData.main.temp
            console.log("Temperature : " + temp)
            const weatherDesc = weatherData.weather[0].description
            console.log("Weather Description : " + weatherDesc)

            const icon = weatherData.weather[0].icon
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in "+ query + " is : " + temp + " degrees celcius</h1>")
            res.write("<p>The weather description is currently : " + weatherDesc + "</p>");
            res.write("<img src = " + iconUrl +">")
            res.send();
        })
    });
})

app.listen(3000,function(){
        console.log("Server is running on port 3000");
    });