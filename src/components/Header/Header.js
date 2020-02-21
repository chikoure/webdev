import React from 'react';
import Logo from '../Logo/Logo';
import ButtonLogin from '../UI/Buttons/ButtonLogin';
import logoHeader from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <div className='main-header'>
      <Logo logoLink={logoHeader} />
      <ButtonLogin>LOGIN</ButtonLogin>
    </div>
  );
};

export default Header;
