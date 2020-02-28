import React from 'react';
import './index.scss';
import HeadLine from '../Headlines/Headline/HeadLine';
import Hoc from '../../../hoc/Hoc'

const Dashboard = (props) => {
  return <Hoc>
      <span className='dashboard'>
        <HeadLine classe={'small-headline'}>{props.title}</HeadLine>
        <HeadLine classe={'paragraph'}>{props.children}</HeadLine>
      </span>
    </Hoc>;
};

export default Dashboard;
