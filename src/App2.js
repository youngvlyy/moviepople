// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Component } from "./core/heropy";
import { TheHeader } from "./components/TheHeader";


export class App2 extends Component {
	constructor(){
		super({
		})
	}
	render() {
		const routeView = document.createElement('router-View');
		this.el.append(new TheHeader().el, routeView) ;
		// routeView.append(new creatRouter(router))
		console.log(location.href)

	}//화면에 보여지는 것
}