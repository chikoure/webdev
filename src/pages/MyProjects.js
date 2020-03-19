import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import Project from '../components/UI/Project/Project';

class MyProjects extends Component {
  componentDidMount() {
    this.props.onFetchProjects(this.props.userToken);
  }

  render() {
    if (this.props.projects[0]) {
      console.log(this.props.projects[0]._id);
      this.props.onFetchSprints(
        this.props.userToken,
        this.props.projects[0]._id
      );
    }
    let projects = this.props.projects.map((elem) => {
      return <Project
          title={elem.title}
          estimateAmount={elem.estimateAmount}
          completionDeadline={elem.completionDeadline}
          startDate={elem.startDate}
          dueDate={elem.dueDate}
          statusName={elem.status.name}
          stacks={elem.stacks}
          hourlyCostDay={elem.hourlyCostDay}
          gitName={elem.githubRepo.name}
          gitOwner={elem.githubRepo.owner}
          sprints={elem.sprints}
        />;
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
    onFetchSprints: (token, projectId) =>
      dispatch(actions.fetchSprints(token, projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
