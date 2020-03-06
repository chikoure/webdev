import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link
      to={props.href}
      className={props.classe}
      id={props.children}
      onClick={props.onClick}>
      {props.text}
    </Link>
  );
};

export default Button;
