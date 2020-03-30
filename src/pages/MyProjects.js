import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import Project from '../components/UI/Project/Project';
import Spinner from '../components/UI/Spinner/Spinner';

class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.props.onFetchProjects(this.props.userToken);
  }

  sprintSelectedHandler = (id) => {
    this.props.history.push(`/dashboard/myProjects/${id}/sprints`);
  };
  render() {
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
    if (this.props.loading) {
      projects = <Spinner />;
    }

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
    projects: state.project.projects,
    loading: state.project.loading
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
