import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';

class MyProjects extends Component {
  componentDidMount() {
    this.props.onFetchProjects(this.props.userToken);
    if (this.props.projects[0]) {
      this.props.onFetchSprints(this.props.projects[0]._id);
    }
  }

  render() {
    let projects = this.props.projects.map((elem) => {
      return <p>{elem.title}</p>;
    });

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
