
var events = require('events');

const EVENT_KEYBOARD_INPUT = 'KeyboardInput';

class UserInputHandler extends events.EventEmitter{
	static get EVENT_KEYBOARD_INPUT(){
		return EVENT_KEYBOARD_INPUT;
    }
	constructor(){
		super();
		console.log('Init user input.');
		this.enableRawMode();
		var that = this;
		process.stdin.addListener("data", function(d) {
		    var word = d.toString().trim();
		    that.emit(EVENT_KEYBOARD_INPUT, word);
		  });	
	}

	enableRawMode(){
		process.stdin.setRawMode(true);
	}

	diableRawMode(){
		process.stdin.setRawMode(false);
	}
}


// var uih = new UserInputHandler();

// uih.addListener('cadorna', (message)=>{console.log(message)});
// uih.addListener('word', (message)=>{
// 	console.log('you enter ' + message)
// 	if(message == 'q') process.exit(1);
// });
// uih.emitCustomEvent();

module['exports'] = UserInputHandler;

