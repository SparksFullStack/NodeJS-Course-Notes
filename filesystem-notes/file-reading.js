const fs = require('fs');

// fs.readdir('.', (err, content) => {
//     if (err) return err;
//     else console.log(content);
// })

fs.readFile('test.html', 'UTF-8', (err, content) => {
    if (err) return console.log(`There was an error: ${err}`);
    else console.log(content);
})