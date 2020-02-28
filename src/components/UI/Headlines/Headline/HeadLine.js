import React from 'react';
import './index.scss';

const HeadLine = (props) => {
  return <p className={props.classe}>{props.children}</p>;
};

export default HeadLine;
