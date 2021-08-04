import  {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/login' component={Login}/>
          <Route exact path = '/register' component={Register}/>
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
