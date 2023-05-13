// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Component } from "./core/heropy";
import { TheHeader } from "./components/TheHeader";


export class App extends Component {
	constructor(){
		super({
		})
	}
	render() {
		// this.el.textContent = 'hello world'
		const routerView = document.createElement('router-view');
		this.el.append(new TheHeader().el, routerView);


	}//화면에 보여지는 것
}