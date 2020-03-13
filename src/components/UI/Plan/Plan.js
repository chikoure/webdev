import React from 'react';
import HeadLine from '../Headlines/Headline/HeadLine';
import Gommette from '../Gommette/Gommette';
import Dashboard from '../Dashboard/Dashboard';
import Hoc from '../../../hoc/Hoc'

const Plan = (props) => {
  return <Hoc>
          <div className='flex'>
            <Gommette number={props.number}></Gommette>
            <Dashboard title={props.title}>{props.children}</Dashboard>
          </div>
        </Hoc>;
};

export default Plan;
