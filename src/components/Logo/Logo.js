import React from 'react';

const Logo = (props) => {
  return (
    <div>
      <a href='/'>
        <img src={props.logoLink} alt='wedev logo' />
      </a>
    </div>
  );
};

export default Logo;
