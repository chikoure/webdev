import React from 'react';

const Button = (props) => {
  return <button className={props.classe}>{props.children}</button>;
};

export default Button;
