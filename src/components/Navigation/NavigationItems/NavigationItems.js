import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/home' exact>
      Accueil
    </NavigationItem>
    {!props.isAuthenticated ? (
      <NavigationItem link='/login' exact>
        connection
      </NavigationItem>
    ) : (
      <NavigationItem link='/logout' exact>
        deconnecter
      </NavigationItem>
    )}
  </ul>
);

export default navigationItems;
