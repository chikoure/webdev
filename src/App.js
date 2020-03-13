import React, { Component } from 'react';
import LayoutDashboard from '../src/components/Layout/LayoutDashboard';
import LayoutHome from '../src/components/Layout/LayoutHome';
import { connect } from 'react-redux';
import * as actions from '../src/store/actions/index';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Logout from '../src/pages/Logout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/home' exact component={LayoutHome} />
        <Route path='/logout' component={Logout} />
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
