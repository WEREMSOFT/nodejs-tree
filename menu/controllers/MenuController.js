const UserInputHandler = require('./userInputHandler/controllers/UserInputHandler');

class MenuController {
	constructor(pMenu, pView){
		this.menu = pMenu;
		this.view  = pView;
		this.view.currentItem = this.menu;
		this.view.render();
	}

	processOption(pOption){
		console.log('selected option ' + pOption.data);
	}

	update(){
		this.view.render();
    }

    setCurrentOption(pOption){
		this.view.currentItem = pOption;
    }
}

module['exports'] = MenuController;