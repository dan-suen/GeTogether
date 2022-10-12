import React from 'react';
import './scrollToTop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'

const ScrollToTop = (props) => {

  return (
    <button  onClick={props.scrollToTop} className="back-to-top btn btn-danger">
        <span>&#8679;</span>
    </button>
  );
};

export default ScrollToTop;