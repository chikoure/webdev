import React, { Component } from 'react';
import Aux from '../../hoc/Hoc';
import { connect } from 'react-redux';
import ToolBar from '../Navigation/ToolBar/ToolBar';

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

const mapStateToProps = (state) => ({
  userID: state.auth.userId
});

export default connect(mapStateToProps)(LayoutDashboard);
