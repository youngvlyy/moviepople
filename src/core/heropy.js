
export class Component {
	constructor(element = {}){ //여러개를 받으니 객체로 설정
		const {tagName = 'div', state = {},props = {}} = element //객체 초기값 div 설정
		this.el = document.createElement(tagName);
		this.state = state
		this.props = props
		this.render()
		
	}
	render() {
	}
}

function routeRender(routes){
	if(!location.hash){
		history.replaceState(null,'', '/#/home')
	}
	const routeView = document.querySelector('router-view');
	//https://localhost:1234/#/home?name=heropy
	const [hash, queryString = ''] = location.hash.split('?');
	const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))//hash 주소끝에 /가 붙을 수도 있고 안붙을 수도 있음
	console.log(currentRoute)
	routeView.innerHTML = ''
	routeView.append(new currentRoute.component().el)

}

export function creatRouter(routes){
	return function(){
		window.addEventListener('popstate', ()=>{
			routeRender(routes)
		})
		routeRender(routes) //popstate는 최초실행이 되지 않아서 한번 더 해줘야함
	}
}