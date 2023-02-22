import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/projects/:id">
              <Project/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>

          <Switch>
            <Route path="/signup">
              <Signup/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
