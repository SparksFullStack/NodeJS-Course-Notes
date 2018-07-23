const http = require('http');
const fs = require(`fs`);

const server = http.createServer((req, res) => {
    let body = ``;
    
    if (req.method === `GET`){
        res.writeHead(200, {'Content-Type': 'text/html'});

        // ** this reads the html file and sends it to the client to be displayed in their browser
        fs.readFile(`./http-form.html`, `UTF-8`, (err, data) => {
            if (err) return console.log(`There was an error: \n ${err}`);
            else res.write(data);
            res.end();
        })
    
    // ** because forms automatically trigger a 'POST' request, this will run if the form is submitted
    } else if (req.method === `POST`){
        // *** this will trigger when the data from the form is submitted
        req.on(`data`, (data) => {
            body += data;
        })

        // *** this will trigger when the request is over and send the head as well as the new data and end the server's process
        req.on(`end`, () => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(body, () => res.end());
        })
    
    // ** this will trigger if the request is not of either the GET or POST types
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(`The request could not be completed`);
    }
});

server.listen(3000, (err) => {
    if (err) return console.log(`There was an error starting the server: ${err}`);
    console.log(`The server is listening on port 3000`);
})