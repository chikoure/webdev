import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' exact>
      Accueil
    </NavigationItem>
    {!props.isAuthenticated ? null : (
      <NavigationItem link='/dashboard/addProject' exact>
        Ajouter un projet
      </NavigationItem>
    )}
    {!props.isAuthenticated ? (
      <NavigationItem link='/dashboard/login' exact>
        connection
      </NavigationItem>
    ) : (
      <NavigationItem link='/logout' exact>
        Se déconnecter
      </NavigationItem>
    )}
  </ul>
);

export default navigationItems;
