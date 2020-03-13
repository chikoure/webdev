import React, { Component } from 'react';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';

export default class SignUp extends Component {
  render() {
    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>
            INSCRIPTION
          </Headline>
          <div className='form--signup'>
            <Input
              type='text'
              required={true}
              name='firstName'
              id='firstName'
              for='firstName'
              label='Nom :'/>
            <Input
              type='text'
              required={true}
              name='lastName'
              id='lastName'
              for='lastName'
              label='Prénom :'/>
            <Input
              type='text'
              required={true}
              name='email'
              id='email'
              for='email'
              label='Email :'></Input>
            <Input
              type='text'
              required={true}
              name='password'
              id='password'
              for='password'
              label='Mot de passe :'/>
            <Input
              type='text'
              required={true}
              name='phone'
              id='phone'
              for='phone'
              label='Téléphone :'></Input>
            <Input
              type='text'
              required={true}
              name='society'
              id='society'
              for='society'
              label='Societé :'/>
            <Input
              type='text'
              required={true}
              name='siret'
              id='siret'
              for='siret'
              label='Siret :'></Input>
            <Input
              type='text'
              required={true}
              name='profil'
              id='profil'
              for='profil'
              label='Profil :'/>
            <Input
              type='text'
              required={true}
              name='status'
              id='status'
              for='status'
              label='Statut :'/>
          </div>
          <div>
            <Button classe='btn btn--large btn--large--green' text="INSCRIPTION"/>
          </div>
        </Card>
      </div>
    );
  }
}
