// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Component } from "../core/heropy";


export class TheHeader extends Component {
	constructor(){
		super({
		})
	}
	render() {
		this.el.innerHTML = `
			<a href = '#/home'>Home</a>
			<a href = '#/about'>about</a>
		`

	}//화면에 보여지는 것
}
