import { Component } from "../core/heropy";
import messageStore from "./messageStore";


export default class Textfield extends Component{
	constructor(){
		super()
	}
	render(){
		this.el.innerHTML = `
			<input value = '${messageStore.state.message}'/> 
		`
		const input = this.el.querySelector('input');
		const div = document.createElement('div');
		input.addEventListener('input', function(){
			messageStore.state.message = input.value;
		})
		
	}
}