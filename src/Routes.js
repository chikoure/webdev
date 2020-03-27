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
import Sprints from './pages/Sprints';
import Tasks from './pages/Tasks';
import AddTasks from './pages/AddTasks';
import Calendar from './pages/Calendar';

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
                path='/dashboard/calendar'
                exact
                component={Calendar}></Route>
              <Route path='/dashboard/logout' exact component={Logout}></Route>
              <Route
                path='/dashboard/myProjects/:projectId/sprints'
                exact
                component={Sprints}
              />
              <Route
                path='/dashboard/myProjects/sprints/:projectId/addSprint'
                exact
                component={AddSprint}></Route>
              <Route
                path='/dashboard/myProjects/:projectId/sprints/:sprintId/tasks'
                exact
                component={Tasks}
              />
              <Route
                path='/dashboard/myProjects/:projectId/sprints/:sprintId/tasks/addTasks'
                exact
                component={AddTasks}
              />
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
