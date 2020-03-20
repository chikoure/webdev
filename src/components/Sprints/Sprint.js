import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Sprint extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.onFetchSprints(this.props.userToken, this.props.match.params.id);
  }

  render() {
    if (this.props.sprints) {
      console.log(this.props.sprints);
    }
    const sprints = this.props.sprints;
    const sprin = sprints.map((e) => {
      return e.tasks.map((task) => {
        return <p>{task.title}</p>;
      });
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
