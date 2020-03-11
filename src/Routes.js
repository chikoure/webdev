import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import LayoutHome from './components/Layout/LayoutHome';
import { LayoutDashboard } from '../src/components/Layout/LayoutDashboard';
import Login from '../src/pages/Login';
import SignUp from './pages/SignUp';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={LayoutHome} />
          <Route path='/dashboard' exact component={LayoutDashboard}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
