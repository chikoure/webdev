import React, { Component } from 'react';
import * as actions from '../store/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Project from '../components/UI/Project/Project';
import Spinner from '../components/UI/Spinner/Spinner';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
library.add(faWrench);

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home--container'>
          <h1>LA PAGE D'ACCUEIL EST EN COURS DE DÉVELLOPEMENT</h1>
          <div className='Wrench'>
            <a>
              <FontAwesomeIcon icon={faWrench} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
