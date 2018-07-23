const http = require("http");

// * This creates the server and sends the head and the response
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>It's ya boiiiii</h1>");
})

// * Intitializes the server and listens for requests through localhost:3000
server.listen(3000)