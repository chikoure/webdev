import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Headline from '../UI/Headlines/Headline/HeadLine';
import Card from '../UI/cards/Card';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLink
} from '@fortawesome/free-solid-svg-icons';
library.add(faLink);

const Sprint = (props) => {
console.log('props');
console.log(props);
  let status = 'statut'
  if(props.statusName == 'En cours')
    status += ' statut--red';
  else
    status += ' statut--emeraud';

  return (
    <Hoc>
      <div className='sprint--container'>
      <Card className='card card--sprint'>
        <div>
          <Headline classe='headline headline--small'>
            <span title={props.statusName} className={status}></span>
            {(props.title).toUpperCase()}
          </Headline>
          <div class='sprint--data'>
            <ul>
              <li>
                Date de début : {new Date(props.startDate).toDateString()}
              </li>
              <li>
                Date de fin : {new Date(props.dueDate).toDateString()}
              </li>
              <li>
                Nom du Git : {props.statusName}
              </li>
            </ul>
            <div className='lien-task' onClick={props.clicked}>
              Tasks
              &nbsp;
              <FontAwesomeIcon icon={faLink} />
            </div>
          </div>
        </div>
      </Card>
      </div>
    </Hoc>
  );
}

export default withRouter(Sprint);
