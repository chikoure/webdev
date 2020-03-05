import React from 'react';

const Input = (props) => {
  return (
    <div className='form-input-container'>
      <label className='form-label' for={props.for}>
        {props.label}
      </label>
      <input
        className='form--input'
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.requiered}
      />
    </div>
  );
};

export default Input;
