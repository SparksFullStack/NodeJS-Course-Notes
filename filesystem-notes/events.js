const events = require('events');
const util = require(`util`);

let emitter = new events.EventEmitter();
emitter.on(`newEvent`, (name) => util.log(`${name} is a cheesedick`));
emitter.emit('newEvent', 'Charlie');