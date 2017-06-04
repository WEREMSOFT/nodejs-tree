const UserInputHandler = require('../../userInputHandler/controllers/UserInputHandler');

class MenuController {
	constructor(pMenu, pView){
		this.userInputHandler = new UserInputHandler();
		this.userInputHandler.addListener(UserInputHandler.EVENT_KEYBOARD_INPUT, this.processOption);
		this.menu = pMenu;
		this.view  = pView;
		this.view.currentItem = this.menu;
		this.view.render();
	}

	processOption(pOption){
		console.log('selected option ' + pOption);
		console.log(this.menu.children[pOption]);
	}

	update(){
		this.view.render();
    }

    setCurrentOption(pOption){
		this.view.currentItem = pOption;
    }
}

module['exports'] = MenuController;