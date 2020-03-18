import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/dashboard/home' exact>
      Accueil
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link='/dashboard/addProject' exact>
        Ajouter un projet
      </NavigationItem>
    ) : null}
    {!props.isAuthenticated ? null : (
      <NavigationItem link='/dashboard/addSprint' exact>
        Ajouter un sprint
      </NavigationItem>
    )}
    {!props.isAuthenticated ? (
      <NavigationItem link='/dashboard/login' exact>
        connection
      </NavigationItem>
    ) : (
      <NavigationItem link='/dashboard/logout' exact>
        Se déconnecter
      </NavigationItem>
    )}
  </ul>
);

export default navigationItems;
