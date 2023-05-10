// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Fruite } from "./components/fruites";
import { Component } from "./core/heropy";

export class App extends Component {
	constructor(){
		super({
			tagName: 'h2',
			state : {
				inputvalue : '',
				fruites : [
					{name : 'apple', price: 1000},
					{name : 'pineapple', price: 2000},
					{name : 'banana', price: 3000}
				]
	
			}
		})
	}
	render() {
		// this.el.textContent = 'hello world'
		this.el.innerHTML = /* html */`
			<input/>
			<button>click</button>
			<ul></ul>
		`
		const input = this.el.querySelector('input');
		const button = this.el.querySelector('button');
		const ul = this.el.querySelector('ul');
		
		input.addEventListener('input', ()=>{
			this.state.inputvalue = input.value;
		})

		button.addEventListener('click', ()=>{
			console.log(this.state.inputvalue);
		})

		ul.append(...this.state.fruites.filter(fruite => fruite.price < 3000)
		.map(fruite =>{
			return new Fruite({props:{name: fruite.name, price: fruite.price}}).el
		}))

	}//화면에 보여지는 것
}