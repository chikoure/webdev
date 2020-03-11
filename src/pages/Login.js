import React, { Component } from 'react';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';
import * as actions from '../store/actions/index';
import { Redirect } from 'react-router-dom';
import axios from '../axios-instance';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Mail Address'
          },
          value: '',
          label: 'Adresse E-mail :',
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password'
          },
          value: '',
          label: 'Mot de passe :',
          validation: {
            required: true,
            minLength: 6
          },
          valid: false,
          touched: false
        }
      },
      isSignup: true
    };
  }

  componentDidMount() {
    localStorage.clear();
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  // onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  login = (e) => {
    e.preventDefault();
    // axios
    //   .post('/users/login', {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then((res) => {
    //     console.log('hello', res);
    //     if (res.status === 200) {
    //       this.props.history.push('/logintest.js');
    //     }
    //   })
    //   .catch((err) => {
    //     console.log('hnddn');
    //   });
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        label={formElement.config.label}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>CONNEXION</Headline>
          <div className='form--login'>
            {/* <Input
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
            /> */}
            {authRedirect}
            {form}
          </div>
          <div>
            <Button
              classe='btn btn--large btn--large--green btn--large--green-login'
              text='CONNEXION'
              onClick={this.login}
            />
            <Button
              href='/signup'
              classe='btn btn--large btn--signup'
              text='INSCRIPTION'
            />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    RedirectPath: state.auth.authRedirectPath,
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
