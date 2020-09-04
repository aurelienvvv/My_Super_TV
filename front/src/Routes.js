import Home from "./components/Home/Home";
import About from "./components/About/About";
import TV from "./components/TVContainer/TVContainer";
import CreateProg from "./components/CreateProg/CreateProg";
import AllChannels from "./components/AllChannels/AllChannels";

export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tv/:id', component: TV },
  { path: '/creer-tv', component: CreateProg },
  { path: '/explore', component: AllChannels },
]