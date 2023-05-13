import {App} from './App.js'
import router from './routes/index.js'

const root1 = document.querySelector('#root1');
root1.append(new App().el)

router()

