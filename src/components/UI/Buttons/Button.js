import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.href} text='login' className={props.classe}>
      {props.text}
    </Link>
  );
};

export default Button;
