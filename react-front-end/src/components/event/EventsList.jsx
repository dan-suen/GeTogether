import React from 'react';
import './eventsList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const EventsList = (props) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const navigateCreate = () => {
    navigate(`/create`);
  };
  console.log(props)

  return (
    <>
       <div className='events-list__header'>
          <h5>Your Events</h5>
          {user && <button className='btn btn-primary' onClick={navigateCreate}><FontAwesomeIcon icon={faPlus} /></button>}
        </div>
        
        <ul className="list-group list-group-flush">
          {props.children}
        </ul>
    </>
  );
};

export default EventsList;