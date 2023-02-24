import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext()
   
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar/>}
          <div className='container'>
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard/>}
              </Route>
            </Switch>

            <Switch>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create/>}
              </Route>
            </Switch>

            <Switch>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project/>}
              </Route>
            </Switch>

            <Switch>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login/>}
              </Route>
            </Switch>

            <Switch>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup/>}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers/>}
        </BrowserRouter>
      )}
  </div>
  );
}

export default App
