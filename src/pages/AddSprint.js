import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';
import * as actions from '../store/actions/index';

class AddSprint extends Component {
  state = {
    addSprintForm: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Titre'
        },
        value: '',
        label: 'Titre :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      startDate: {
        elementType: 'date',
        elementConfig: {
          type: 'date',
          placeholder: 'Date de début'
        },
        value: '',
        label: 'Date de début :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      dueDate: {
        elementType: 'date',
        elementConfig: {
          type: 'date',
          placeholder: 'Date de fin'
        },
        value: '',
        label: 'Date de fin :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      status: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: '5e59461d75ccbe128b54a6e3', displayValue: 'En cours' },
            { value: '5e59461d75ccbe128b54a6e4', displayValue: 'Terminé' },
            { value: '5e59461d75ccbe128b54a6e5', displayValue: 'A faire' }
          ]
        },
        value: '5e59461d75ccbe128b54a6e5',
        label: 'Statut :',
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
    const updatedAddSprintForm = {
      ...this.state.addSprintForm
    };
    const updatedFormElement = {
      ...updatedAddSprintForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedAddSprintForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedAddSprintForm) {
      formIsValid = updatedAddSprintForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ addSprintForm: updatedAddSprintForm, formIsValid: formIsValid });
  };

  register = (e) => {
    e.preventDefault();

    this.props.onRegister(
      this.state.addSprintForm.title.value,
      this.state.addSprintForm.startDate.value,
      this.state.addSprintForm.dueDate.value,
      this.state.addSprintForm.status.value,
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.addSprintForm) {
      formElementsArray.push({
        id: key,
        config: this.state.addSprintForm[key]
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
          <Headline classe={'headline headline--big'}>AJOUT DE SPRINT</Headline>
          <div className='form--add-sprint'>
            {form}
          </div>
          <div>
            <Button
              classe='btn btn--large btn--large--green'
              text='AJOUTER'
              onClick={this.addSprint}
            />
          </div>
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddSprint: (
        title,
        startDate,
        dueDate,
        status
    ) =>
      dispatch(
        actions.addSprint(
            title,
            startDate,
            dueDate,
            status
        )
      )
  };
};

export default connect(null, mapDispatchToProps)(AddSprint);
