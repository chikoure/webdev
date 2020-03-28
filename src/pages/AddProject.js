import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../components/UI/Inputs/Input';
import Card from '../components/UI/cards/Card';
import Headline from '../components/UI/Headlines/Headline/HeadLine';
import Button from '../components/UI/Buttons/Button';
import * as actions from '../store/actions/index';

class AddProject extends Component {
  state = {
    addProjectForm: {
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
      estimateAmount: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Montant du devis'
        },
        value: '',
        label: 'Montant du devis :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      completionDeadline: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Délais de réalisation'
        },
        value: '',
        label: 'Délais de réalisation (en jour) :',
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
            { value: '5e5945c8ddb7bc127dfe8267', displayValue: 'En cours' },
            { value: '5e5945c8ddb7bc127dfe8268', displayValue: 'Réalisé' }
          ]
        },
        value: '5e5945c8ddb7bc127dfe8267',
        label: 'Statut :',
        validation: {},
        valid: true
      },
      stacks: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Stacks utilisés'
        },
        value: '',
        label: 'Stacks utilisés :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      hourlyCostDay: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Coût horaire jour'
        },
        value: '',
        label: 'Coût horaire jour :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      client: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: '5e59427fe14f9a11ee9339f9',
              displayValue: 'Cool society name'
            },
            { value: '5e594307e14f9a11ee9339fa', displayValue: 'STC' },
            {
              value: '5e594394e14f9a11ee9339fb',
              displayValue: 'Rémy ART'
            }
          ]
        },
        value: '5e59427fe14f9a11ee9339f9',
        label: 'Client :',
        validation: {},
        valid: true
      },
      gitHubRepoName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nom du dépot GitHub'
        },
        value: '',
        label: 'Nom du dépot GitHub :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      gitHubRepoOwner: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nom du propiétaire GitHub'
        },
        value: '',
        label: 'Nom du propiétaire GitHub :',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    redirect: false
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
    const updatedAddProjectForm = {
      ...this.state.addProjectForm
    };
    const updatedFormElement = {
      ...updatedAddProjectForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedAddProjectForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedAddProjectForm) {
      formIsValid = updatedAddProjectForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      addProjectForm: updatedAddProjectForm,
      formIsValid: formIsValid
    });
  };

  addProject = (e) => {
    e.preventDefault();

    this.props.onAddProject(
      this.props.userToken,
      this.state.addProjectForm.title.value,
      this.state.addProjectForm.estimateAmount.value,
      this.state.addProjectForm.completionDeadline.value,
      this.state.addProjectForm.startDate.value,
      this.state.addProjectForm.dueDate.value,
      this.state.addProjectForm.status.value,
      this.state.addProjectForm.stacks.value,
      this.state.addProjectForm.hourlyCostDay.value,
      this.state.addProjectForm.client.value,
      this.state.addProjectForm.gitHubRepoName.value,
      this.state.addProjectForm.gitHubRepoOwner.value
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.addProjectForm) {
      formElementsArray.push({
        id: key,
        config: this.state.addProjectForm[key]
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
    const addedRedirect =
      this.props.response === 201 ? (
        <Redirect
          to={`/dashboard/myProjects/${this.props.match.params.id}/sprints`}
        />
      ) : null;

    return (
      <div className='form-container'>
        {addedRedirect}
        <Card className='card card--form'>
          <Headline classe={'headline headline--big'}>AJOUT DE PROJET</Headline>
          <div className='form--add-project'>{form}</div>
          <div>
            <Button
              classe='btn btn--large btn--large--green'
              text='AJOUTER'
              onClick={this.addProject}
            />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    response: state.project.response
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (
      token,
      title,
      estimateAmount,
      completionDeadline,
      startDate,
      dueDate,
      status,
      stacks,
      hourlyCostDay,
      client,
      githubRepoName,
      githubRepoOwner
    ) =>
      dispatch(
        actions.addProject(
          token,
          title,
          estimateAmount,
          completionDeadline,
          startDate,
          dueDate,
          status,
          stacks,
          hourlyCostDay,
          client,
          githubRepoName,
          githubRepoOwner
        )
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
