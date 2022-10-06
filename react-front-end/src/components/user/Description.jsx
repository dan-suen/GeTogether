import React from 'react';
import './description.scss';

const Description = () => {
  return (
    <div className='description'>
      <img src="/images/default.png" alt="users avatar" />
      <div className='description__text'>
        <div className="card" >
        <div class="card-header">
        <h5 className="card-title">About</h5>
        </div>
          <div className="card-body">
            
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;