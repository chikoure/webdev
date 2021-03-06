import React from 'react';
import Hoc from '../../../hoc/Hoc';
import Headline from '../Headlines/Headline/HeadLine';
import Card from '../cards/Card';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/fr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLink
} from '@fortawesome/free-solid-svg-icons';
library.add(faLink);

const Project = (props) => {
  let status = 'statut'
  switch(props.statusName)
  {
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
      <div className='project--container'>
      <Card className='card card--project'>
        <div>
          <Headline classe='headline headline--small'>
            <span title={props.statusName} className={status}></span>
            {(props.title).toUpperCase()}
          </Headline>
          <div class='project--data'>
            <ul class='project--ul'>
              <li>Nom du Git : {props.gitName}</li>
              <li>Propiétaire du Git : {props.gitOwner}</li>
              <li>Date de début : <Moment format="DD/MM/YYYY">{props.startDate}</Moment></li>
              <li>Date de fin : <Moment format="DD/MM/YYYY">{props.dueDate}</Moment></li>
              <li>Délais de réalisation : {props.estimateAmount} heures</li>
              <li>Coût horaire journalier : {props.hourlyCostDay}€</li>
              <li>Date de complétion : <Moment format="DD/MM/YYYY">{props.completionDeadline}</Moment></li>
              <li>Stack utilisé : {props.stacks}</li>
            </ul>
            <div className='lien-sprint' onClick={props.clicked}>
              Sprints
              &nbsp;
              <FontAwesomeIcon icon={faLink} />
            </div>
          </div>
        </div>
      </Card>
      </div>
    </Hoc>
  );
};

export default withRouter(Project);
