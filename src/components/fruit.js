import { Component } from "../core/heropy";

export class Fruit extends Component{
    constructor(log){
        super({
            tagName : 'li',
            props : log.props //log = 생성자 함수 Fruit
        })
    }
    render(){
        this.el.innerHTML = `
        <span>${this.props.name}</span>
        <span>${this.props.price}</span>`
        
    }
}