import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Project from '../components/UI/Project/Project';
import Card from '../components/UI/cards/Card';
import Spinner from '../components/UI/Spinner/Spinner';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import HeadLine from '../components/UI/Headlines/Headline/HeadLine';
library.add(faWrench);

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.onFetchProjects(this.props.userToken);
  }
  render() {
    console.log(this.props.projects);
    const NumberOfProjects = this.props.projects.length;

    let projectsDoneNumber = 0;
    let projectsInProgress = 0;
    let chiffreDaffaire = 0;
    this.props.projects.map((project) => {
      chiffreDaffaire += project.estimateAmount;
      if (project.status.name === 'Réalisé') {
        projectsDoneNumber++;
      } else if (project.status.name === 'En cours') {
        projectsInProgress++;
      }
      return projectsDoneNumber, projectsInProgress, chiffreDaffaire;
    });
    console.log(
      projectsDoneNumber,
      projectsInProgress,
      chiffreDaffaire,
      NumberOfProjects
    );
    return (
      <div className='Home'>
        {/* <div className='Home--container'>
          <h1>LA PAGE D'ACCUEIL EST EN COURS DE DÉVELLOPEMENT</h1>
          <div className='Wrench'>
            <a>
              <FontAwesomeIcon icon={faWrench} />
            </a>
          </div>
        </div> */}
        <div className='metrics-container'>
          <Card className='card card--metrics'>
            <HeadLine classe='headline headline--medium'>
              Projets réalisés
            </HeadLine>
            <HeadLine classe='headline headline--small'>
              {projectsDoneNumber}/{NumberOfProjects}
            </HeadLine>
          </Card>
          <Card className='card card--metrics'>
            <HeadLine classe='headline headline--medium'>
              Projets en cours
            </HeadLine>
            <HeadLine classe='headline headline--small'>
              {projectsInProgress}
            </HeadLine>
          </Card>
          <Card className='card card--metrics'>
            <HeadLine classe='headline headline--medium'>
              Chiffre d'affaire
            </HeadLine>
            <HeadLine classe='headline headline--small'>
              {chiffreDaffaire} €
            </HeadLine>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
    userToken: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProjects: (token) => dispatch(actions.fetchProjects(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
