import React, { Component } from 'react';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';

export default class SignUp extends Component {
  render() {
    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Input
            type='text'
            required={true}
            name='name'
            id='name'
            for='name'
            label='Nom :'></Input>
          <Input
            type='text'
            required={true}
            name='name'
            id='name'
            for='name'
            label='Prénom :'></Input>
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
            label='Mot de passe :'></Input>
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
            label='Societé :'></Input>
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
            label='Profil :'></Input>
          <Input
            type='text'
            required={true}
            name='name'
            id='name'
            for='name'
            label='Statu :'></Input>
        </Card>
      </div>
    );
  }
}
