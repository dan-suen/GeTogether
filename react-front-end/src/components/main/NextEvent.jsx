import React from 'react';
import './nextEvent.scss'

const NextEvent = () => {
  return (
    <div className=" mb-3 next-event" >
      <h5>YOUR NEXT EVENT</h5>

      <img src="https://loremflickr.com/cache/resized/65535_52084710409_8f98a986ee_c_640_480_nofilter.jpg" className="img-fluid rounded-start" alt="..."/>
  
      <h5 className="card-title">Event Title</h5>
      <p className="card-text">October 3 2023 - October 4 2023</p>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-bs-target
      </button>
      <div className="collapse" id="collapseExample">
        <div>
          Some placeholder content for the collapsable maps
        </div>
      </div>
    </div>
  );
};

export default NextEvent;