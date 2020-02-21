import React from 'react';
import Logo from '../Logo/Logo';
import logoFooter from '../../assets/img/logo-footer.svg';

const Footer = () => {
  return (
    <div className='main-footer'>
      <Logo logoLink={logoFooter} />
      <p>COPYRIGHT 2020</p>
    </div>
  );
};

export default Footer;
