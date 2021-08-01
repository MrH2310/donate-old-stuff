import './App.scss';

import  {
  HashRouter,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HashRouter>
        <>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/login' component={Login}/>
        <Route exact path = '/register' component={Register}/>
        </>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
