import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Headline from '../UI/Headlines/Headline/HeadLine';
import Card from '../UI/cards/Card';
import Moment from 'react-moment';
import 'moment/locale/fr';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
library.add(faLink);

const Sprint = (props) => {
  let status = 'statut';
  switch (props.statusName) {
    case 'En cours':
      status += ' statut--red';
      break;
    case 'Terminé':
      status += ' statut--emeraud';
      break;
    case 'A faire':
      status += ' statut--dark-grey';
      break;
  }

  return (
    <Hoc>
      <div className='sprint--container'>
        <Card className='card card--sprint'>
          <div>
            <Headline classe='headline headline--small'>
              <span title={props.statusName} className={status}></span>
              {props.title.toUpperCase()}
            </Headline>
            <div class='sprint--data'>
              <ul class='sprint--ul'>
                <li>Date de début : <Moment format="DD/MM/YYYY">{props.startDate}</Moment></li>
                <li>Date de fin : <Moment format="DD/MM/YYYY">{props.dueDate}</Moment></li>
                <li>Date de création : <Moment format="DD/MM/YYYY">{props.createdAt}</Moment></li>
                <li>Dernière modification : <Moment fromNow>{props.updatedAt}</Moment></li>
                <li>Statut : {props.statusName}</li>
              </ul>
              <div className='lien-task' onClick={props.clicked}>
                Tasks &nbsp;
                <FontAwesomeIcon icon={faLink} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Hoc>
  );
};

export default withRouter(Sprint);
