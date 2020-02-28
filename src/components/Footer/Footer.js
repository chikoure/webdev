import React from 'react';
import Logo from '../Logo/Logo';
import logoFooter from '../../assets/img/logo-footer.svg';
import SocialMedia from '../UI/Icons/SocialMedia/SocialMedia';

const Footer = () => {
  return (
    <div className='main-footer'>
      <Logo logoLink={logoFooter} />
      <p>© Wedev 2020</p>
      <SocialMedia classe={'social-container-footer'} />
    </div>
  );
};

export default Footer;
