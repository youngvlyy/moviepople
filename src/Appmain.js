import {App2} from './App2.js'
import router from "./routes"

const root2 = document.querySelector('#root2');
root2.append(new App2().el)

router();// root2가 모두 append 된 다음 출력


