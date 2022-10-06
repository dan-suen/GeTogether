import React from 'react';
import Calendar from 'components/main_logged/calender';
import './create.scss';

const Create = () => {
  return (
    <form className='create'>

      <h5 className='create__description-title'>Describe the Event</h5>
      <section className='create__description'>
        <h5>Event Title</h5>
        <div className="input-group mb-3">
          <span className="input-group-text">Event Title</span>
          <input type="text" className="form-control" id="eventTitleControlInput" aria-label="Dollar amount (with dot and two decimal places)"/>
        </div>
        <div className="mb-3">
          <h5>Event Description</h5>
          <textarea className="form-control" id="eventDescriptionControlInput" rows="3"></textarea>
        </div>
        <h5>Event Photo</h5>
        <div className="input-group mb-3">
          <span className="input-group-text" id="eventPhotoControlInput">https://example.com/users/</span>
          <input type="text" className="form-control" id="basic-url" aria-describedby="eventPhotoControlInput"/>
        </div>
      </section>

      <h5 className='create__date-time-title'>Date and time</h5>
      <section className='create__date-time'>
        <div>
          <h5 className='calendar-title'>Choose a Date</h5>
          <Calendar/>
        </div>

        <div className='date-time-sub'>
          <div className="input-group mb-3">
            <span className="input-group-text date-time-hr">hr</span>
            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
            <span className="input-group-text date-time-min">min</span>
            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
          </div>
          <div></div>
        </div>
      </section>

      <h5 className='create__event-logistics-title'>Logistics</h5>
      <section className=' create__event-logistics'>
        <h5>Address</h5>
        <div class="input-group mb-3">
          <span class="input-group-text">Address</span>
          <input type="text" class="form-control" aria-label="Spots remiaining for event"/>
        </div>
        <h5>Entry fee & # of spots for the event</h5>
        <div className='sub-group2'>
          <div class="input-group mb-3">
            <span class="input-group-text">Entry fee</span>
            <span class="input-group-text">$</span>
            <input type="text" class="form-control cost" aria-label="Dollar amount (with dot and two decimal places)"/>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Spots</span>
            <input type="text" class="form-control" aria-label="Spots remiaining for event"/>
          </div>
        </div>
      </section>
      <button type="submit" class="btn btn-primary submit-btn">Submit</button>
    </form>
  );
};

export default Create;