var assert = require('assert');
const MenuItem = require('../models/MenuItem');
var menuItem;

describe('MenuItem', ()=>{
	describe('constructor', ()=>{
		it('should return an object initialized with all variables', ()=>{
			menuItem = new MenuItem('Option #1', ()=>{return 'call back called!!';});
			assert.equal(menuItem.data, 'Option #1');
			assert.equal(menuItem.childrens.length, 0);
			assert.equal(menuItem.callback(), 'call back called!!');
		});
	});

	describe('childrens', ()=>{
		it('should add a children to the childrens collection', ()=>{
			menuItem = new MenuItem('Option #1', ()=>{return 'call back called!!';});
			menuItem.addChild(menuItem);
			assert.equal(menuItem.childrens.length, 1);
		});

		it('should add a children to the childrens collection', ()=>{
			menuItem = new MenuItem('Option #1', ()=>{return 'call back called!!';});
			menuItem.addChild(menuItem);
			assert.equal(menuItem.childrens.length, 1);
		});

		it('should remove a children to the childrens collection', ()=>{
			menuItem = new MenuItem('Option #1', ()=>{return 'call back called!!';});
			menuItem.addChild(menuItem);
			assert.equal(menuItem.childrens.length, 1);
			menuItem.removeChild(menuItem);
			assert.equal(menuItem.childrens.length, 0);
		});
	});
});