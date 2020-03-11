import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';
import * as actions from '../store/actions/index';

class SignUp extends Component {
  state = {
    signUpForm: {
      firstName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nom'
        },
        value: '',
        label: 'Nom :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lastName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Prénom'
        },
        value: '',
        label: 'Prénom :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-Mail'
        },
        value: '',
        label: 'E-mail :',
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
      },
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Numéro de telephone'
        },
        value: '',
        label: 'Télephone :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },

      society: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Société'
        },
        value: '',
        label: 'Société :',
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      siret: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Siret'
        },
        value: '',
        label: 'Numéro de siret :',
        validation: {
          required: true
        },
        valid: true,
        touched: false
      },
      status: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'sas', displayValue: 'SAS' },
            { value: 'sasu', displayValue: 'SASU' },
            { value: 'autoentrepreneur', displayValue: 'Autoentrepreneur' },
            { value: 'eurl', displayValue: 'EURL' },
            { value: 'sarl', displayValue: 'SARL' }
          ]
        },
        value: 'sas',
        label: 'Statu de société :',
        validation: {},
        valid: true
      },
      profil: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'back', displayValue: 'Back' },
            { value: 'front', displayValue: 'Front' },
            { value: 'dataanalyst', displayValue: 'Data Analyst' },
            { value: 'qa', displayValue: 'QA' }
          ]
        },
        value: 'back',
        label: 'Profile :',
        validation: {},
        valid: true
      }
    },
    formIsValid: false
  };

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

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignUpForm = {
      ...this.state.signUpForm
    };
    const updatedFormElement = {
      ...updatedSignUpForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedSignUpForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedSignUpForm) {
      formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ signUpForm: updatedSignUpForm, formIsValid: formIsValid });
  };

  register = (e) => {
    e.preventDefault();

    this.props.onRegister(
      this.state.signUpForm.firstName.value,
      this.state.signUpForm.lastName.value,
      this.state.signUpForm.email.value,
      this.state.signUpForm.password.value,
      this.state.signUpForm.phone.value,
      this.state.signUpForm.society.value,
      this.state.signUpForm.siret.value,
      this.state.signUpForm.status.value,
      this.state.signUpForm.profil.value
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key]
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

    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>INSCRIPTION</Headline>
          <div className='form--signup'>
            {/* <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Nom :'
            />
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Prénom :'
            />
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
              label='Mot de passe :'
            />
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
              label='Societé :'
            />
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
              label='Profil :'
            />
            <Input
              type='text'
              required={true}
              name='name'
              id='name'
              for='name'
              label='Statut :'
            /> */}
            {form}
          </div>
          <div>
            <Button
              classe='btn btn--large btn--large--green btn--large--green-signup'
              text='INSCRIPTION'
              onClick={this.register}
            />
          </div>
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (
      firstName,
      lastName,
      email,
      password,
      phone,
      society,
      siret,
      status,
      profil
    ) =>
      dispatch(
        actions.register(
          firstName,
          lastName,
          email,
          password,
          phone,
          society,
          siret,
          status,
          profil
        )
      )
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
