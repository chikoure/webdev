import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import Button from '../components/UI/Buttons/Button';
import Sprint from '../components/Sprints/Sprint';

class Sprints extends Component {
  componentDidMount() {
    this.props.onFetchSprints(
      this.props.userToken,
      this.props.match.params.projectId
    );
  }

  sprintAddHandler = (id) => {
    this.props.history.push(`/dashboard/myProjects/sprints/${id}/addSprint`);
  };

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

    let sprints = this.props.sprints.map((elem) => {
      console.log(elem);
      return (
        <Sprint
          title={elem.title}
          startDate={elem.startDate}
          dueDate={elem.dueDate}
          statusName={elem.status.name}
          tasks={elem.tasks}
          clicked={() => {
            this.taskDetailsHandler(
              this.props.match.params.projectId,
              elem._id
            );
          }}
        />
      );
    });
    return (
      <div>
        <Button
          text='Ajouter un sprint'
          onClick={() => {
            this.sprintAddHandler(this.props.match.params.projectId);
          }}
        />
        <div className='sprints'>
          <div className='sprints--container'>{sprints}</div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sprints);
