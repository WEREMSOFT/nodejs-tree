const MenuItem = require('./menu/models/MenuItem');
const MenuView = require('./menu/views/MenuView');
const MenuController = require('./menu/controllers/MenuController');

// Setup
let menu = new MenuItem('Main Menu');
let view = new MenuView(menu);
let controller = new MenuController(menu, view);


// Languaje Menu
let langMenu = new MenuItem('Select Languaje', controller.processOption);
langMenu.addChild(new MenuItem('[EN]', controller.processOption));
langMenu.addChild(new MenuItem('[TH]', controller.processOption));
langMenu.addChild(new MenuItem('[SP]', controller.processOption));
langMenu.addChild(new MenuItem('[JA]', controller.processOption));
menu.addChild(langMenu);

// Exit
menu.addChild(new MenuItem('Exit'));

controller.setCurrentOption(langMenu);
userInputHandler.addListener('KeyboardInput', controller.keboardInputHandler);
controlle
controller.update();


