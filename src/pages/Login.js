import React, { Component } from 'react';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';
import axios from '../axios-instance';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    localStorage.clear();
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  login = (e) => {
    console.log('ok');
    e.preventDefault();
    axios
      .post('/users/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        console.log('hello', res);
        if (res.status === 200) {
          this.props.history.push('/logintest.js');
        }
      })
      .catch((err) => {
        console.log('hnddn');
      });
  };

  render() {
    console.log(this.state.email);
    console.log(this.state.password);

    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>CONNEXION</Headline>
          <div className='form--login'>
            <Input
              type='text'
              required={true}
              name='email'
              id='email'
              for='email'
              label='Mail :'
              onChange={this.onChange}
            />
            <Input
              type='text'
              required={true}
              name='password'
              id='password'
              for='password'
              label='Mot de passe :'
              onChange={this.onChange}
            />
          </div>
          <div>
            <Button
              classe='btn btn--large btn--large--green btn--large--green-login'
              text='CONNEXION'
              onClick={this.login}
            />
          </div>
        </Card>
      </div>
    );
  }
}
