import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { setContext } from '@apollo/client/link/context';


import Profile from './pages/Profile';
import Friends from './pages/Friends';
import SignInSignUp from './pages/SignIn';
import Homepage from './pages/Homepage';
// import SinglePost from './pages/single-post/SinglePost';
import Welcome from './pages/Welcome';

import Footer from './components/Footer';
import SearchBar from './components/Search-bar'
import Resources from './components/Resources';

import Auth from './utils/auth';

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
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <div className="container">
            <SearchBar setShowNotifications={setShowNotifications} setNotifications={setNotifications}/>
            <Switch>
              {Auth.loggedIn() ? (
                <>
                  <Route exact path="/" render={(props) => <Homepage showNotifications={showNotifications} notifications={notifications}/>}/>
                  <Route exact path="/profile/:username?" component={Profile} />
                  <Route exact path="/friends" component={Friends} />
                  <Route exact path="/resources" component={Resources} />
                  {/* <Route exact path="/post/:id" component={SinglePost} /> */}
                </>
              ) : (
                <>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/signin" component={SignInSignUp} />
                </>
              )}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
