import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Headline from '../UI/Headlines/Headline/HeadLine';
import Dashboard from '../UI/Dashboard/Dashboard';
import Plan from '../UI/Plan/Plan';
import Icon from '../UI/Icons/Icon';
import icon1 from '../../assets/img/icon1.svg';
import icon2 from '../../assets/img/icon2.svg';
import icon3 from '../../assets/img/icon3.svg';
import icon4 from '../../assets/img/icon4.svg';

export default class Layout extends Component {
  render() {
    return (
      <Hoc>
        <Header />
        <article className='presentation'>
          <div className='test'>
            <div>
              <p>Voici WeDev</p>
            </div>

            <Headline classe={'big-headline'}>
              APPLICATION DE GESTION DE PROJET POUR LES DEV
            </Headline>
            <Headline classe={'paragraph'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Headline>
          </div>

          <div className='icons'>
            <Icon iconLink={icon1}></Icon>
            <Icon iconLink={icon2}></Icon>
            <Icon iconLink={icon3}></Icon>
            <Icon iconLink={icon4}></Icon>
          </div>
          <div className='services'>
            <p>Vos reporting centralisés</p>
            <p>Le suivi de vos activités en temps réel</p>
            <p>Un gain de temps pour le pilotage</p>
            <p>Des utilitaires pour votre dev</p>
          </div>
        </article>
        <article className='flex ecart'>
          <div>
            <Headline classe={'lien-headline'}>Comment ça marche ?</Headline>
            <Dashboard title={'Tous vos outils de dev réuni sur une seule application'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Dashboard>
          </div>
          <div>
            <Plan number={'1'} title={'Créer vos projets'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Plan>
            <Plan number={'2'} title={'Ajoutez vos sprints'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Plan>
            <Plan number={'3'} title={'Affectez vos tâches'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.  
            </Plan>
          </div>
        </article>
        <article></article>
        <Footer />
      </Hoc>
    );
  }
}
