import React, { Component } from 'react';
import Aux from '../../hoc/Hoc';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import Login from '../../pages/Login';

export class LayoutDashboard extends Component {
  render() {
    return (
      <Aux>
        <ToolBar isAuth={this.props.isAuthenticated}></ToolBar>
        <main className={'Content'}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps, null)(LayoutDashboard);
