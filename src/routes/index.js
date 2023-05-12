import {creatRouter} from "../core/heropy"
import { Home } from "./Home";
import { About } from "./About";

export default creatRouter([
	{path:'#/home', component: Home},
	{path:'#/about', component: About}
	
])