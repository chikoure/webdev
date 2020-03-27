import React from 'react';
import { connect } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import * as actions from '../store/actions/index';
import interactionPlugin from '@fullcalendar/interaction';

class Calendar extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: '', start: '' }
    ]
  };
  render() {
    console.log(this.props.projects);
    let eventProjects = [];
    this.props.projects.map((p) => {
      eventProjects.push({
        title: p.title,
        start: p.startDate
      });
    });

    console.log('test', eventProjects);
    return (
      <FullCalendar
        defaultView='dayGridMonth'
        header={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        events={eventProjects}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      />
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
