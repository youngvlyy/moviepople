export class Component {
	constructor(element = {}){ //여러개를 받으니 객체로 설정
		const {tagName = 'div', state={}, props = {}} = element //객체 초기값 div 설정
		this.el = document.createElement(tagName);
		this.state = state
		this.props = props
		this.render()
	}
	render() {

	}
}