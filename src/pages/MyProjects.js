import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import Project from '../components/UI/Project/Project';

class MyProjects extends Component {
  componentDidMount() {
    this.props.onFetchProjects(this.props.userToken);
  }
  sprintSelectedHandler = (id) => {
    this.props.history.push(`/dashboard/myProjects/${id}/sprints`);
  };
  render() {
    if (this.props.projects[0]) {
      console.log(this.props.projects);
    }
    let projects = this.props.projects.map((elem) => {
      return (
        <Project
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
          clicked={() => {
            this.sprintSelectedHandler(elem._id);
          }}
        />
      );
    });

    return (
      <div className='projects'>
        <div className='projects--container'>{projects}</div>
      </div>
    );
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
    // onFetchSprints: (token, projectId) =>
    //   dispatch(actions.fetchSprints(token, projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
