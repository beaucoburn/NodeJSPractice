var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
	console.log('I hear a sound!');
}

eventEmitter.on('sound', myEventHandler);

eventEmitter.emit('sound');
