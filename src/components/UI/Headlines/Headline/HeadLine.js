import React from 'react';
import './index.scss';

const HeadLine = (props) => {
  return (
    <p className={props.classe} onClick={props.clicked}>
      {props.children}
    </p>
  );
};

export default HeadLine;
