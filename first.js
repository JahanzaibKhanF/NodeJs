var http = require('http');
var ip = '192.168.100.28'; // Listen on all network interfaces
var port = 8080;

http.createServer(function(req, res) {
    console.log("Listening on " + ip + ":" + port);
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (req.url === "/api/test") {
        if(req.method === "GET") {
            res.write(JSON.stringify({"message": "Hello World Api working"}));

    } else {
        res.write(JSON.stringify({"message": "Hello World Api working hahahha another method called"}));
    }
}
    res.end();
}).listen(port);
