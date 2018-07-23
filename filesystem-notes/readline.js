const readline = require('readline');
const util = require('util');

const RL = readline.createInterface(process.stdin, process.stdout);

RL.question("What is your name? ", (name) => {
    RL.setPrompt(`${name}, how old are you? `);
    RL.prompt();
    RL.on('line', (age) => {
        if (age < 18){
            util.log(`${name.trim()} you're not old enough to party`);
            process.exit();
        } else {
            util.log(`${name.trim()} you're old enough to party!`);
            process.exit();
        }
    })
});