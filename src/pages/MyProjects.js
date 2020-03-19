import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';

class MyProjects extends Component {
  componentDidMount() {
    this.props.onFetchProjects(this.props.userToken);
    this.props.onFetchSprints(this.props.projectId);
  }

  render() {
    console.log(this.props.projects._id);
    let projects = this.props.projects.map((elem) => {
      return <p>{elem.title}</p>;
    });
    console.log(this.props.projects);
    return <div>{projects}</div>;
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
    onFetchProjects: (token) => dispatch(actions.fetchProjects(token)),
    onFetchSprints: (projectId) => dispatch(actions.fetchSprints(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
