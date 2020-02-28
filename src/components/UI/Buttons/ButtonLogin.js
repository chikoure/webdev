import React from 'react';

const ButtonLogin = (props) => {
  return <button className={props.classe}>{props.children}</button>;
};

export default ButtonLogin;
