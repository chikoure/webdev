import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect, Router } from 'react-router-dom';
import LayoutHome from '../src/components/Layout/LayoutHome';
import { LayoutDashboard } from '../src/components/Layout/LayoutDashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { connect } from 'react-redux';
import * as actions from '../src/store/actions/index';
import AddProject from './pages/AddProject';
import AddSprint from './pages/AddSprint';
import Logout from './pages/Logout';
import MyProjects from './pages/MyProjects';
import Sprint from '../src/components/Sprints/Sprint';
import Tasks from '../src/components/Tasks/Tasks';
import AddTasks from './pages/AddTasks';

export class Routes extends Component {
  componentDidMount() {
    this.props.onAutoSignup();
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/dashboard'>
          <LayoutDashboard isAuthenticated={this.props.Authenticated}>
            <Switch>
              <Route
                path='/dashboard/register'
                exact
                component={SignUp}></Route>
              <Route path='/dashboard/login' exact component={Login}></Route>
              <Route
                path='/dashboard/myProjects'
                exact
                component={MyProjects}></Route>
              <Route
                path='/dashboard/addProject'
                exact
                component={AddProject}></Route>
              <Route
                path='/dashboard/addSprint/:id'
                exact
                component={AddSprint}></Route>
              <Route path='/dashboard/logout' exact component={Logout}></Route>
              <Route
                path='/dashboard/myProjects/:id'
                exact
                component={Sprint}
              />
              <Route path='/dashboard/addTasks/' exact component={AddTasks} />
              <Route path='/dashboard/tasks/' exact component={Tasks} />
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

const mapStateToProps = (state) => {
  return {
    Authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
