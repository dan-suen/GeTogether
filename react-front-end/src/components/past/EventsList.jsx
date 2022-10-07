import React from 'react';
import './eventsList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const EventsList = (props) => {
  return (
    <>
       <div className='events-list__header'>
          <h5>Event Listing</h5>
        </div>
        
        <ul className="list-group list-group-flush">
          {props.children}
        </ul>
    </>
  );
};

export default EventsList;