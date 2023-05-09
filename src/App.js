// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Component } from "./core/heropy";
import { Fruit } from "./components/fruit";

export class App extends Component {
	constructor(){
		super({
			tagName: 'h2',
			state : {
				fruites:[
					{name : 'banana' , price : 1000},
					{name : 'apple' , price : 2000},
					{name : 'pineapple' , price : 3000},
				]
			}
		})
	}
	render() {
		this.el.innerHTML = `
			<ul></ul>
		 `
		const ul = this.el.querySelector('ul')
		ul.append(...this.state.fruites.filter(fruit => fruit.price < 3000)
		.map(
			fruit => {
				return new Fruit({props :{ name : fruit.name
				,price : fruit.price}}).el
			}
		))
	}
}