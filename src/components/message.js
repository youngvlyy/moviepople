import { Component } from "../core/heropy";
import messageStore from "./messageStore";

export default class Message extends Component{
	constructor(){
		super()
		messageStore.subscribe('message', ()=>{})
	}
	render(){
		this.el.innerHTML = `
			<inputletter>${messageStore.state.message}</inputletter>
		`
	}
}