import React from 'react';
import Logo from '../Logo/Logo';
import ButtonLogin from '../UI/Buttons/ButtonLogin';
import logoHeader from '../../assets/img/logo.svg';
import SocialMedia from '../UI/Icons/SocialMedia/SocialMedia';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='login'>
        <Logo logoLink={logoHeader} />
        <ButtonLogin classe={'btn-login'}>LOGIN</ButtonLogin>
      </div>
      <div className='sign-up'>
        <h1>
          Oû que vous soyez <br></br>Restez <strong>Freelance</strong>
        </h1>
        <ButtonLogin classe={'btn-signUp'}>INSCRIVEZ-VOUS</ButtonLogin>
      </div>

      <SocialMedia classe={'social-container-header'} />
    </div>
  );
};

export default Header;
