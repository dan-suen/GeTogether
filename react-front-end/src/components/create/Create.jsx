
import React, { useEffect, useState } from 'react';
import Calendar from 'components/main/calender';
import './create.scss';
import Places from 'components/map/Places';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import useApplicationData from 'hooks/useEventInfo';


const Create = () => {
  const [formData, setFormData] = useState({
    title:"",
    basicUrl: "",
    fee: "",
    hour: "",
    min: "",
    spots: "",
    address:"",
    description: "",
    lat:0 ,
    lng:0,
    user: 0,
    selectDay:""
  });

  const [coords, setCoords] = useState({});
  const [selectDay, setSelectDay] = useState("");
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate(`/`);
  };

  useEffect(()=> {
    setFormData(prev => {
      return {...prev, user: user.id }
    })
  },[])

  useEffect(()=> {
    //console.log(coords);
     setFormData(prev => {
      return {...prev, address: coords.address, lat: coords.lat, lng: coords.lng, selectDay: String(selectDay) }
    })
  },[coords,selectDay]);

  const handleSubmit =  (e) => {
    e.preventDefault();

    if(!coords.lat || !coords.lng){
      alert('You must have a valid address');
      return;
    }
     
     axios.post('/create', JSON.stringify(formData)).then( (data) => {
        console.log(data.data);
        axios.get('/events').then(() => {
          data && navigateHome();
        })

      // },3000);
      
     })
  }

  const handleChange = (e) => {
    console.log(e);
    setFormData(prev =>  { 
      return {...prev, [e.target.id]: e.target.value 
      }
    });
    console.log(formData);
    //console.log("+++++++", e.target.id, formData);
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h5 className='create__description-title'>Describe the Event</h5>
      <section className='create__description'>
        <h5>Event Title</h5>
        <div className="input-group mb-3">
          <span className="input-group-text">Event Title</span>
          <input 
            type="text"
            className="form-control"
            id="title"
            aria-label="Dollar amount (with dot and two decimal places)"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
        <div className="mb-3">
          <h5>Event Description</h5>
          <textarea
          className="form-control"
          id="description"
          rows="3"
          onChange={handleChange}
          value={formData.description}
          >
          </textarea>
        </div>
        <h5>Event Photo</h5>
        <div className="input-group mb-3">
          <span className="input-group-text" id="eventPhotoControlInput">https://example.com/users/</span>
          <input
            type="text"
            className="form-control"
            id="basicUrl"
            aria-describedby="eventPhotoControlInput"
            onChange={handleChange}
            value={formData.basicUrl}
          />
        </div>
      </section>

      <h5 className='create__date-time-title'>Date and time</h5>
      <section className='create__date-time'>
        <div>
          <h5 className='calendar-title'>Choose a Date</h5>
          <Calendar onSelect={setSelectDay} selected={selectDay} />
        </div>

        <div className='date-time-sub'>
          <div className="input-group mb-3">
            <span className="input-group-text date-time-hr">hr</span>

            <input
              type="text"
              className="form-control"
              aria-label="the hour"
              id="hour"Coords
              onChange={handleChange}
              value={formData.hour}
            />
            <span className="input-group-text date-time-min">min</span>
            <input
            type="text"
            className="form-control"
            aria-label="Minutes"
            id="min"
            onChange={handleChange}
            value={formData.min}
            />
          </div>
          <div></div>
        </div>
      </section>

      <h5 className='create__event-logistics-title'>Logistics</h5>
      <section className=' create__event-logistics'>
        <h5>Address</h5>
        <div class="input-group mb-3">
          <span class="input-group-text">Address</span>
          <Places setCoords={setCoords} />
        </div>
        <h5>Entry fee & # of spots for the event</h5>
        <div className='sub-group2'>
          <div className="input-group mb-3">
            <span className="input-group-text">Entry fee</span>
            <span className="input-group-text">$</span>
            <input
            type="text"
            className="form-control cost"
            aria-label="Dollar amount (with dot and two decimal places)"
            id="fee"
            onChange={handleChange}
            value={formData.fee}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Spots</span>
            <input
              type="text" 
              className="form-control" 
              aria-label="Spots for event"
              id="spots"
              onChange={handleChange}
              value={formData.spots}
            />
          </div>
        </div>
      </section>
      <button onclick="location.href='/'" type="submit" className="btn btn-primary submit-btn">Submit</button>
    </form>
  );
};

export default Create;