import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Button from '../UI/Buttons/Button';

class Sprint extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.onFetchSprints(this.props.userToken, this.props.match.params.id);
  }

  sprintAddHandler = (id) => {
    this.props.history.push('/dashboard/addSprint/' + id);
  };

  taskDetailsHandler = (sprintId, projectId) => {
    this.props.history.push({
      pathname: '/dashboard/tasks',
      state: {
        projectId: projectId,
        sprintId: sprintId
      }
    });
  };

  render() {
    if (this.props.sprints) {
      console.log(this.props.sprints);
    }
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
                  this.taskDetailsHandler(e._id, this.props.match.params.id)
                }>
                {task.title}
              </p>
            );
          })}
          <Button
            text='Ajouter un sprint'
            onClick={() => {
              this.sprintAddHandler(this.props.match.params.id);
            }}
          />
        </div>
      );
    });
    return <div>{sprin}</div>;
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
