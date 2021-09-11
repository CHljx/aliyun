const http=require('http');
http.createServer(function (request, response) {
    response.writeHead(
        200,
        {
            'Content-Type': 'text/plain'
        });
    response.end('Hello World12312sdfsd3\n');
}).listen(80);
console.log('Server started');
