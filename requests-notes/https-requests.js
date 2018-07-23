// * These are all the imports we'll be using to make/handle requests
const http = require('http');
const https = require('https');
const fs = require('fs');

// * Storing the URLs in consts
const httpsUrl = 'https://jsonplaceholder.typicode.com/posts';

// * NOT WORKING: Making the request
https.get(httpsUrl, res => {
    res.setEncoding('utf8');
    let body = '';


    // *** this will be triggered when data is received
    res.on('data', data => {body += data});

    console.log(body);

    // *** this will be triggered with the response has been finished
    res.on('end', () => {
        fs.write('data.json', body, 'utf8', err => {
            if (err) return console.log(`There was an error creating the file: ${err}`);
        })
    })
})