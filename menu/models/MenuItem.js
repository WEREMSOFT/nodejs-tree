
class MenuItem{
	
	constructor(pData, pCallBack){
		this.data = pData;
		this.callback = pCallBack;
		this.parent = null;
		this.childrens = [];
	}

	addChild(pNode){
		pNode.parent = this;
		this.childrens.push(pNode);
	}

	removeChild(pChild){
		throw('Not implemented');
	}

}

module['exports']  = MenuItem;