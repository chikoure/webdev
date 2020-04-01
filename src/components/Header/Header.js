import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../UI/Buttons/Button';
import logoHeader from '../../assets/img/logo.svg';
import SocialMedia from '../UI/Icons/SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='main-header'>
      <div className='login'>
        <Logo logoLink={logoHeader} />
        <div>
          {props.isAuthenticated ? (
            <Button
              href='/dashboard/home'
              classe={'btn btn--login'}
              text='DASHBOARD'></Button>
          ) : null}
          {props.isAuthenticated ? (
            <Button
              href='/dashboard/login'
              classe={'btn btn--login'}
              text='LOGOUT'></Button>
          ) : (
            <Button
              href='/dashboard/login'
              classe={'btn btn--login'}
              text='LOGIN'></Button>
          )}
        </div>
      </div>
      <div className='sign-up'>
        <h1>
          Oû que vous soyez <br></br>Restez <strong>Freelance</strong>
        </h1>
        <Button
          href='/dashboard/register'
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
