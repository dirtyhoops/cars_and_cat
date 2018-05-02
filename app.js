var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);
    if(request.url === '/') { 
        fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url ==='/cars') {
        fs.readFile('./views/car.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url ==='/cats') {
        fs.readFile('./views/cat.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url ==='/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/car1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }


    else {
        response.writeHead(404);
        response.end('File not found!!');
    }
});

server.listen(7707);
console.log('Running in localhost at port 6789');

