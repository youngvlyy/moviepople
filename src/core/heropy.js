
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
	//https://localhost:1234/#/home/?name=123&age=30
	const [hash, queryString = ''] = location.hash.split('?');

	const query = queryString.split('&').reduce((acc,cur)=>{
		const [key, value] = cur.split('=');
		acc[key] = value;
		return acc
		
	},{});
	history.replaceState(query,'')
	const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))//hash 주소끝에 /가 붙을 수도 있고 안붙을 수도 있음

	console.log(queryString)
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


////store

export class Store {
	constructor(state){
		this.state = {}
		this.observers = {} //감시객체
		for(const key in state){
			Object.defineProperty(this.state, key, {
				get : ()=>{
					return state[key]
				}, //state 받는 함수
				set : (val)=>{
					state[key] = val
					this.observers[key]()
				} // state 바뀌면 실행되는 함수
			}
				
			)
		}
	}
	subscribe(key, cb){//변겅되는 데이터 감시
		this.observers[key] = cb
	}
}