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
import Moment from 'react-moment';
import 'moment-timezone';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.onAutoSignup();
  }

  render() {
    return <Routes />;
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
