import React from 'react';
import Hoc from '../../../hoc/Hoc'
import Card from '../cards/Card';

const Project = (props) => {
    let sprints = props.sprints.map((elem) => {
		return <p>{elem.title}</p>;
    });
  return <Hoc>
	  <Card className='card'>
		<div className='project--title'>
			<h2>Projet : { props.title }</h2>
		</div>
		<div className='project--container'>
			<div className='project--content'>
				<hr />
				<h3>Données</h3>
				<hr />
				<p>Statut : { props.statusName }</p>
				<p>Stacks utilisés : { props.stacks }</p>
				<p>Coût horaire journalier : { props.hourlyCostDay }€</p>
				<p>Temps estimé : { props.estimateAmount }</p>
				<p>Date de complétion : { new Date(props.completionDeadline).toDateString() }</p>
				<p>Date de début : { new Date(props.startDate).toDateString() }</p>
				<p>Date de fin : { new Date(props.dueDate).toDateString() }</p>
			</div>
			<div className='project--content'>
				<hr />
				<h3>Github</h3>
				<hr />
				<p>Nom : { props.gitName }</p>
				<p>Propiétaire : { props.gitOwner }</p>
				<hr />
				<h3>Sprints</h3>
				<hr />
				{sprints}
			</div>
		</div>
	  </Card>
  </Hoc>;
};

export default Project;
