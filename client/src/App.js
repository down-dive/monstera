import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Profile from './pages/Profile';


function App() {
  return (
  //   <Router>
  //   <div className="flex-column justify-flex-start min-100-vh">
  //     <Header />
  //     <div className="container">
  //       <Switch>
  //         <Route exact path="/" component={Home} />
  //         <Route exact path="/login" component={SignInAndSignUpPage} />
  //         <Route exact path="/profile/:username?" component={Profile} />
  //         <Route exact path="/thought/:id" component={FriendsList} />

  //         <Route component={NoMatch} />
  //       </Switch>
  //     </div>
  //     <Footer />
  //   </div>
  // </Router>
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
  );
}

export default App;
