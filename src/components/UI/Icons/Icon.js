import React from 'react';
import './index.scss';

const Icon = (props) => {
  return (
    <div className='features-icon'>
      <img src={props.iconLink}></img>
    </div>
  );
};

export default Icon;
