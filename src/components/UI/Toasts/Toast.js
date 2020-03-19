import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);

const Toast = (props) => {
    return <div className={props.classe}>
        <p>{props.text}</p>
        <a 
          className='action' 
          onClick={function() { removeToast(props.classe) }}>
            <FontAwesomeIcon icon={faTimes} />
        </a>
    </div>;
};

function removeToast(className){
	var elements = document.getElementsByClassName(className);
	while(elements.length > 0){
		elements[0].parentNode.removeChild(elements[0]);
	}
}

export default Toast;
