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
        <Button classe={'btn btn--login'}>
          <Link to='/login'>LOGIN</Link>
        </Button>
      </div>
      <div className='sign-up'>
        <h1>
          Oû que vous soyez <br></br>Restez <strong>Freelance</strong>
        </h1>
        <Button classe={'btn btn--signup'}>
          <Link to='/SignUp'>INSCRIVEZ-VOUS</Link>
        </Button>
      </div>
      <div className='explore'>
        <SocialMedia classe={'social-container-header'} />
        <Button classe={'btn btn--explore'}>EXPLORE </Button>
      </div>
    </div>
  );
};

export default Header;
