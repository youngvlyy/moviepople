// export default class App {
// 	constructor(){
// 		this.el = document.createElement('div');
// 		this.el.textContent = 'hello world'
// 	}
// }

import { Component, creatRouter} from "./core/heropy";
import { TheHeader } from "./components/TheHeader";
import routes from "./routes";
// import { creatRouter } from "./routes/index";


export class App2 extends Component {
	constructor(){
		super({
		})
	}
	render() {
		const routeView = document.createElement('router-View');
		this.el.append(new TheHeader().el, routeView) ;
		routeView.append(new creatRouter())

	}//화면에 보여지는 것
}