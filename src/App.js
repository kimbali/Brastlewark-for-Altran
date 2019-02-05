import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/index.sass';

import Landing from './components/Landing';
import HomePage from './components/HomePage';
import GnomeCard from './components/GnomeCard';

const store = require('./reducers').init()

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/gnomeland" />} />
              <Route exact path="/gnomeland" render={() => <Landing />} />
              <Route exact path="/brastlewark" render={() => <HomePage />} />
              <Route exact path="/brastlewark/:id" component={GnomeCard} />
            </Switch>
        </div>
      </Provider>
    );
  }
}

export default  withRouter(App);
