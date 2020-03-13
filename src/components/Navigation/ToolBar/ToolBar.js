import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import logoHeader from '../../../assets/img/logo.svg';

const toolbar = (props) => (
  <header className='Toolbar'>
    <Logo logoLink={logoHeader} />
    <nav>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
