import React, { Component } from 'react';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';

export default class Login extends Component {
  render() {
    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>
            CONNEXION
          </Headline>
          <div className='form--login'>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Mail :'/>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Mot de passe :'/>
          </div>
          <div>
            <Button classe='btn btn--large btn--large--green btn--large--green-login' text="CONNEXION"/>
          </div>
        </Card>
      </div>
    )
  }
}
