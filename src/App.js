// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Component } from "./core/heropy";

export class App extends Component {
	constructor(){
		super({
			tagName: 'h2'
		})
	}
	render() {
		this.el.textContent = 'hello world'
	}
}