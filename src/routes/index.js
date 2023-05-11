import { Home } from "./Home";
import { About } from "./About";
import {creatRouter} from "../core/heropy"

export default creatRouter([
	{path:'#/home', component: Home},
	{path:'#/about', component: About}
	
])