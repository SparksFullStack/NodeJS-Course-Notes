const https = require("https");
const http = require("http");

const url = 'https://jsonplaceholder.typicode.com/posts';

// * This creates a server and handles a GET requests to the localhost:3000/posts URL. 
// * After that, it calls the API, writes the response, and handles other cases
http.createServer((req, serverResponse) => {
    if (req.method === 'GET' && req.url === '/posts'){
        https.get(url, httpResponse => {
            httpResponse.on('data', data => {
                httpResponse.setEncoding('utf8');
                serverResponse.write(data);
            })

            httpResponse.on('end', () => {
                serverResponse.end();
                console.log(`The request is over`);
            })
        })
    } else {
        serverResponse.writeHead(404, {'Content-Type': 'text/plain'});
        serverResponse.end('404  ERROR, the page doesn\'t exist!');
    }

}).listen(3000);

console.log(`The server is listening at port 3000`);
