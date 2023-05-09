export class Component {
	constructor(element = {}){ //여러개를 받으니 객체로 설정
		const {tagName = 'div'} = element //객체 초기값 div 설정
		this.el = document.createElement(tagName);
		this.render()
	}
	render() {

	}
}