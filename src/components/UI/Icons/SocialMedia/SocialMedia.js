import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faLinkedinIn);

const SocialMedia = (props) => {
  return (
    <div className={props.classe}>
      <div className='media'>
        <a>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
      <div className='media'>
        <a>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className='media'>
        <a>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
