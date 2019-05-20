const http=require("http");

http.createServer(function(res,rep){
	rep.write("hello word");
	rep.end();
}).listen(9090)