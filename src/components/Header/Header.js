import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../UI/Buttons/Button';
import logoHeader from '../../assets/img/logo.svg';
import SocialMedia from '../UI/Icons/SocialMedia/SocialMedia';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='login'>
        <Logo logoLink={logoHeader} />
        <Button classe={'btn btn--login'}>LOGIN</Button>
      </div>
      <div className='sign-up'>
        <h1>
          Oû que vous soyez <br></br>Restez <strong>Freelance</strong>
        </h1>
        <Button classe={'btn btn--signup'}>INSCRIVEZ-VOUS</Button>
      </div>

      <SocialMedia classe={'social-container-header'} />
    </div>
  );
};

export default Header;
