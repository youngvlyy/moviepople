import { Component } from "../core/heropy";

export class Fruite extends Component{
	constructor(payload){
		super({
			tagName : 'li',
			props : payload.props
		})
	}
	render(){
		this.el.textContent = `${this.props.name}`
	}
}