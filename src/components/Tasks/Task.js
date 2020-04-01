import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Headline from '../UI/Headlines/Headline/HeadLine';
import Card from '../UI/cards/Card';
import { withRouter } from 'react-router-dom';

const Task = (props) => {
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
      <div className='task--container'>
        <Card className='card card--task'>
          <div>
            <Headline classe='headline headline--small'>
              <span title={props.statusName} className={status}></span>
              {props.title.toUpperCase()}
            </Headline>
            <div class='task--data'>
              <ul class='task--ul'>
                <li>Description : {props.description}</li>
                <li>Temps de réalisation : {props.realisationTime} jours</li>
                <li>Statut : {props.statusName}</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Hoc>
  );
};

export default withRouter(Task);
