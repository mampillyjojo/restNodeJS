var http=require('http');


var handleRequests = function(req,res){
		console.log("Received http request :: "+req.url);

		if(req.url === "/"){
			res.write("Hellp from NodeJs");

		}else if (req.url === "/Products") {
			res.write("List of Products");

		}else if (req.url === "/Kart") {
			res.write("List of Karts");

		}else{
			res.write("Jojo is great");

		}

		res.end(); 
				server.close()

}

var server = http.createServer(handleRequests);


server.listen(3001,function(){
		console.log("server is running on port 3000");
});

