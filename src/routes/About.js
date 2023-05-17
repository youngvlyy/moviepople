import { Component } from "../core/heropy";

export default class About extends Component {
	render(){
		const {a, b, c} = history.state
		this.el.innerHTML = `
			<h1>About page</h1>
			<div>${a}</div>
			<div>${b}</div>
			<div>${c}</div>
		`
	}

}