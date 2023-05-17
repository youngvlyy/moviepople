import { Component, Store } from "../core/heropy";
import Textfield from "../components/Textfield"
import message from "../components/message";

export default class Home extends Component {
	render(){
		this.el.innerHTML = `
			<h1>home page</h1>
		`
		this.el.append(new Textfield().el, new message().el)
	}
}