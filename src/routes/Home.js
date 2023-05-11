import { Component } from "../core/heropy";

export class Home extends Component {
	constructor(){
		super(
			{
			}
		)
	}
	render(){
		this.el.textContent = `
			home page
		`
	}
}