import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Button from '../UI/Buttons/Button';

class Sprint extends Component {
  componentDidMount() {
    console.log(this.props.match.params.projectId);
    this.props.onFetchSprints(
      this.props.userToken,
      this.props.match.params.projectId
    );
  }

  sprintAddHandler = (id) => {
    this.props.history.push(`/dashboard/myProjects/sprints/${id}/addSprint`);
  };

  // taskDetailsHandler = (sprintId, projectId) => {
  //   this.props.history.push({
  //     pathname: '/dashboard/tasks',
  //     state: {
  //       projectId: projectId,
  //       sprintId: sprintId
  //     }
  //   });
  // };

  taskDetailsHandler = (projectId, sprintId) => {
    this.props.history.push(
      `/dashboard/myProjects/${projectId}/sprints/${sprintId}/tasks`
    );
  };

  render() {
    if (this.props.sprints) {
      console.log(this.props.sprints);
    }
    console.log(this.props);
    const sprints = this.props.sprints;
    const sprin = sprints.map((e) => {
      return (
        <div>
          <p>{e.title}</p>
          <p>{e.startDate}</p>
          <p>{e.dueDate}</p>
          <p>{e.status.name}</p>
          {e.tasks.map((task) => {
            return (
              <p
                onClick={() =>
                  this.taskDetailsHandler(
                    this.props.match.params.projectId,
                    e._id
                  )
                }>
                {task.title}
              </p>
            );
          })}
        </div>
      );
    });
    return (
      <div>
        {sprin}
        <Button
          text='Ajouter un sprint'
          onClick={() => {
            this.sprintAddHandler(this.props.match.params.projectId);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    sprints: state.sprint.sprints
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSprints: (token, projectId) =>
      dispatch(actions.fetchSprints(token, projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
