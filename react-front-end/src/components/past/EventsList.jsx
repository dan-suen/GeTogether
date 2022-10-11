import React from 'react';
import './eventsList.scss'

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