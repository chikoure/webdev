import React from 'react';
import Hoc from '../../../hoc/Hoc';
import Headline from '../Headlines/Headline/HeadLine';
import Card from '../cards/Card';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLink
} from '@fortawesome/free-solid-svg-icons';
library.add(faLink);

const Project = (props) => {
  let status = 'statut'
  if(props.statusName == 'En cours')
    status += ' statut--red';
  else
    status += ' statut--emeraud';

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
            <ul>
              <li>
                Nom du Git : {props.gitName}
              </li>
              <li>
                Propiétaire du Git : {props.gitOwner}
              </li>
              <li>
                Date de début : {new Date(props.startDate).toDateString()}
              </li>
              <li>
                Date de fin : {new Date(props.dueDate).toDateString()}
              </li>
              <li>
                Délais de réalisation : {props.estimateAmount} jours
              </li>
              <li>
                Coût horaire journalier : {props.hourlyCostDay}€
              </li>
              <li>
                Date de complétion :{' '}{new Date(props.completionDeadline).toDateString()}
              </li>
              <li>
                Stack utilisé : {props.stacks}
              </li>
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
