import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Button from '../UI/Buttons/Button';

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchTasks(
      this.props.userToken,
      this.props.match.params.projectId,
      this.props.match.params.sprintId
    );
  }

  addTaskHandler = (projectId, sprintId) => {
    this.props.history.push(
      `/dashboard/myProjects/${projectId}/sprints/${sprintId}/tasks/addTasks`
    );
  };
  render() {
    console.log(this.props);

    let tasks = this.props.tasks.map((t) => {
      return (
        <div>
          <p>{t.title}</p>
          <p>{t.description}</p>
          <p>{t.status.name}</p>
          <p>{t.realisationTime}</p>
        </div>
      );
    });

    return (
      <div>
        {tasks}
        <Button
          text='Ajouter une tâche'
          onClick={() => {
            this.addTaskHandler(
              this.props.match.params.projectId,
              this.props.match.params.sprintId
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    sprints: state.sprint.sprints,
    tasks: state.task.tasks
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
