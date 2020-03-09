import React from 'react';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = ['form--input'];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('input-invalid');
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className='form-input-container'>
      <label className='form-label' for={props.for}>
        {props.label}
      </label>
      {/* <input
        className='form--input'
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.requiered}
        onChange={props.onChange}
      /> */}
      {inputElement}
    </div>
  );
};

export default Input;
