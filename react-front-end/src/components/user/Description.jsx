import React from 'react';
import './description.scss';

const Description = (props) => {
  return (
    <div className='description'>
      <img src={props.user.photo} alt="users avatar" />
      <div className='description__text'>
        <div className="card" >
        <div className="card-header">
        <h5 className="card-title">About</h5>
        </div>
          <div className="card-body">
            
            <p className="card-text">{props.user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;