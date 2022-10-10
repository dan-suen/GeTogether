import React from 'react';
import './description.scss';

const Description = (props) => {
  return (
    <div className='description'>
      <div className='description__img-user'>
        <img src={props.user.photo} alt="users avatar" />
        <h5>User: {props.user.username}</h5> 
      </div>
      
      <div className='description__text'>
        <div className="card" >
        <div className="card-header">
        <h5 className="card-title">About</h5>
        </div>
          <div className="card-body">
            
             <p className="card-text">{props.user.description}</p> 
            {/* <p className="card-text"><textarea></textarea></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;