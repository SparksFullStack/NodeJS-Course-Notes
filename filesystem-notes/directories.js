const fs = require('fs');

// * This checks to see if the directory/file already exists with the .exists method, then creates the directory/file if it doesn't

// fs.exists('views', (res) => {
//     if (!res) {
//         fs.mkdir('views', (err) => {
//             if (err) return console.log(`There was an error: ${err}`);
//             else fs.writeFile('./views/new.html', 'this is a new file in the new directory', (err) => {
//                 if (err) return console.log('There was an error: ${err}');
//                 else console.log(`The file and directory were created successfully!`);
//             })
//         })
//     } else console.log(`The directory already exists!`);
// })

// * These methods are for handling directories and files

// ** this removes directories:
// fs.rmdirSync('./newDir');

// ** this removes files:
// fs.unlinkSync('./newDir/newFile.js');

// ** This will log the error if one comes back:
// try {
//     fs.rmdirSync('./newDir');
// } catch (err) {
//     console.log(`There was an error: ${err}`)
// }

// ** This will rename and move a file:
// fs.rename('./newFile2.js', 'newDirectory/newFile.js', (err) => {
//     if (err) return console.log(`There was an error renaming the file: ${err}`);
//     else console.log(`The file was renamed successfully!`);
// });
