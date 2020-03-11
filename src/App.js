import React, { Component } from 'react';
import LayoutDashboard from '../src/components/Layout/LayoutDashboard';
import LayoutHome from '../src/components/Layout/LayoutHome';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Routes from './Routes';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/home' exact component={LayoutHome} />

        <Route path='/signup' exact component={SignUp} />
      </Switch>
    );

    return (
      <div>
        <LayoutDashboard>{routes}</LayoutDashboard>
      </div>
    );
  }
}

export default withRouter(App);
