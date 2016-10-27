var express = require('express');

var app = express();

app.listen(3001, function(){
    console.log("NodeJS is running in port 3001");
})


app.get('/',function(req,res){
	res.send("Hello from NodeJS");
})

app.get('/Products',function(req,res){
	res.send("List of Products Express");
})


app.get('/Kart',function(req,res){
	res.send("List of karts Express");
})


