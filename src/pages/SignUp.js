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
              name='name'
              id='name'
              for='name'
              label='Nom :'/>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Prénom :'/>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Mail :'></Input>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Mot de passe :'/>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Téléphone :'></Input>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Societé :'/>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Siret :'></Input>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Profil :'/>
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Statut :'/>
          </div>
          <Button classe='btn btn--green btn--green-signup' text="INSCRIPTION"/>
        </Card>
      </div>
    );
  }
}
