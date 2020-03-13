import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../UI/Buttons/Button';
import logoHeader from '../../assets/img/logo.svg';
import SocialMedia from '../UI/Icons/SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='login'>
        <Logo logoLink={logoHeader} />
        <Button href='/login' classe={'btn btn--login'} text='LOGIN'></Button>
      </div>
      <div className='sign-up'>
        <h1>
          Oû que vous soyez <br></br>Restez <strong>Freelance</strong>
        </h1>
        <Button
          href='/signUp'
          classe={'btn btn--signup'}
          text='INSCRIVEZ-VOUS'></Button>
      </div>
      <div className='explore'>
        <SocialMedia classe={'social-container-header'} />
        <Button classe={'btn btn--explore'} text={'EXPLORE '}></Button>
      </div>
    </div>
  );
};

export default Header;
