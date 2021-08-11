import  {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import './scss/main.scss';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/login' component={Login}/>
            <Route exact path ='/register' component={Register}/>
            <Route exact path ='/logout' component={Logout}/> 
          </Switch>
          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
