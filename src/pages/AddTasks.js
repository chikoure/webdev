import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';
import * as actions from '../store/actions/index';

class AddTasks extends Component {
  state = {
    addTaskForm: {
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
      description: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Description'
        },
        value: '',
        label: 'Description :',
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
      },
      realisationTime: {
        elementType: 'number',
        elementConfig: {
          type: 'number',
          placeholder: 'Temps de realisation'
        },
        value: '',
        label: 'Temps de realisation :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
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
    const updatedaddTaskForm = {
      ...this.state.addTaskForm
    };
    const updatedFormElement = {
      ...updatedaddTaskForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedaddTaskForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedaddTaskForm) {
      formIsValid = updatedaddTaskForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      addTaskForm: updatedaddTaskForm,
      formIsValid: formIsValid
    });
  };

  addTask = (e) => {
    e.preventDefault();

    this.props.onAddTasks(
      this.props.userToken,
      this.props.location.state.projectID,
      this.props.location.state.sprintID,
      this.state.addTaskForm.title.value,
      this.state.addTaskForm.description.value,
      this.state.addTaskForm.status.value,
      this.state.addTaskForm.realisationTime.value
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.addTaskForm) {
      formElementsArray.push({
        id: key,
        config: this.state.addTaskForm[key]
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

    console.log(this.props);

    return (
      <div className='form-container'>
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>AJOUT DE TÂCHE</Headline>
          <div className='form--add-sprint'>{form}</div>
          <div>
            <Button
              classe='btn btn--large btn--large--green'
              text='AJOUTER'
              onClick={this.addTask}
            />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTasks: (
      token,
      projectId,
      sprintId,
      title,
      description,
      status,
      realisationTime
    ) =>
      dispatch(
        actions.addTasks(
          token,
          projectId,
          sprintId,
          title,
          description,
          status,
          realisationTime
        )
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTasks);
