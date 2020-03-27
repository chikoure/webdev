import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Button from '../UI/Buttons/Button';

class Sprint extends Component {
  componentDidMount() {
    // this.props.onFetchTasks(
    //   this.props.userToken,
    //   this.props.location.state.projectId,
    //   this.props.location.state.sprintId
    // );
  }

  // addTaskHandler = (sprintId, projectId) => {
  //   this.props.history.push({
  //     pathname: '/dashboard/tasks/addTasks',
  //     state: {
  //       projectId: projectId,
  //       sprintId: sprintId
  //     }
  //   });
  // };
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
        <Button text='Ajouter une tâche' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
