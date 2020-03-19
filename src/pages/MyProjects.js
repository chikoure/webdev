import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';

class MyProjects extends Component {
  componentDidMount() {
    this.props.onFetchProjects(this.props.userToken);
  }

  render() {
    console.log(this.props.projects);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    projects: state.project.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProjects: (token) => dispatch(actions.fetchProjects(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
