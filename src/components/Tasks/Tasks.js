import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Button from '../UI/Buttons/Button';

class Sprint extends Component {
  componentDidMount() {
    this.props.onFetchTasks(
      this.props.userToken,
      this.props.location.state.projectId,
      this.props.location.state.sprintId
    );
  }

  addTaskHandler = (sprintId, projectId) => {
    this.props.history.push({
      pathname: '/dashboard/addTasks',
      state: {
        projectId: projectId,
        sprintId: sprintId
      }
    });
  };
  render() {
    const projetId = this.props.location.state.projectId;
    const sprintId = this.props.location.state.sprintId;
    console.log(projetId);
    console.log(sprintId);
    let tasks = this.props.tasks.map((t) => {
      return (
        <div>
          <p>{t.title}</p>
          <p>{t.description}</p>
          <p>{t.status.name}</p>
          <p>{t.realisationTime}</p>
          <Button
            text='Ajouter une tâche'
            onClick={() => {
              this.addTaskHandler(sprintId, projetId);
            }}
          />
        </div>
      );
    });

    return <div>{tasks}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
