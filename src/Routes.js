import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect, Router } from 'react-router-dom';
import LayoutHome from './components/Layout/LayoutHome';
import { LayoutDashboard } from '../src/components/Layout/LayoutDashboard';
import Login from '../src/pages/Login';
import SignUp from './pages/SignUp';
import AddProject from './pages/AddProject';
import AddSprint from './pages/AddSprint';

export class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/dashboard'>
          <LayoutDashboard>
            <Switch>
              <Route
                path='/dashboard/register'
                exact
                component={SignUp}></Route>
              <Route path='/dashboard/login' exact component={Login}></Route>
              <Route
                path='/dashboard/addProject'
                exact
                component={AddProject}></Route>
              <Route
                path='/dashboard/addSprint'
                exact
                component={AddSprint}></Route>
            </Switch>
          </LayoutDashboard>
        </Route>

        <Route>
          <Switch>
            <Route path='/' exact component={LayoutHome} />
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default withRouter(Routes);
