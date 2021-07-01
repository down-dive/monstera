import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Profile from './pages/Profile';
import Friends from './pages/Friends';
import SignInSignUp from './pages/Sign-in-sign-up';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <div className="container">
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/profile/:username?" component={Profile} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/signinsignup" component={SignInSignUp} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
