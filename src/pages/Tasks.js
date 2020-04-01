import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import Button from '../components/UI/Buttons/Button';
import Task from '../components/Tasks/Task';
import Spinner from '../components/UI/Spinner/Spinner';

class Tasks extends Component {
  constructor(props) {
    super(props);
    if (
      this.props.userToken &&
      this.props.match.params.projectId &&
      this.props.match.params.sprintId
    ) {
      this.props.onFetchTasks(
        this.props.userToken,
        this.props.match.params.projectId,
        this.props.match.params.sprintId
      );
    }
  }

  addTaskHandler = (projectId, sprintId) => {
    this.props.history.push(
      `/dashboard/myProjects/${projectId}/sprints/${sprintId}/tasks/addTasks`
    );
  };
  render() {
    let tasks = this.props.tasks.map((elem) => {
      return (
        <Task
          title={elem.title}
          description={elem.description}
          realisationTime={elem.realisationTime}
          createdAt={elem.createdAt}
          updatedAt={elem.updatedAt}
          statusName={elem.status.name}
        />
      );
    });

    if (this.props.loading) {
      tasks = <Spinner />;
    }

    return (
      <div>
        <Button
          classe='btn btn--large btn--large--green'
          text='Ajouter une tâche'
          onClick={() => {
            this.addTaskHandler(
              this.props.match.params.projectId,
              this.props.match.params.sprintId
            );
          }}
        />
        <div className='tasks'>
          <div className='tasks--container'>{tasks}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    sprints: state.sprint.sprints,
    tasks: state.task.tasks,
    loading: state.task.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTasks: (token, projectId, sprintId) =>
      dispatch(actions.fetchTasks(token, projectId, sprintId)),
    onAddTasks: (
      token,
      projectId,
      sprintId,
      title,
      description,
      status,
      realisationTime
    ) =>
      dispatch(
        actions.addTasks(
          token,
          projectId,
          sprintId,
          title,
          description,
          status,
          realisationTime
        )
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
