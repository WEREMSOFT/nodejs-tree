class MenuView {
	constructor(pMenuRoot){
		this.currentItem = pMenuRoot;
	}

	render(){
		for(let i = 0; i < this.currentItem.childrens.length; i++){
			console.log(i + '. ' + this.currentItem.childrens[i].data);
		}
	}
}

module['exports'] = MenuView;