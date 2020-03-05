import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Layout} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    );
  }
}

export default withRouter(Routes);
