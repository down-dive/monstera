import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';

import Profile from './pages/Profile';
import Friends from './pages/Friends';
import SignInSignUp from './pages/Sign-in-sign-up';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import SearchBar from './components/Search-bar'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <SearchBar />
            <Switch>
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/friends" component={Friends} />
              <Route exact path="/signin" component={SignInSignUp} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
