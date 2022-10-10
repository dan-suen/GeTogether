
import React, { useEffect, useState,useRef } from 'react';
import Calendar from 'components/main/calender';
import './create.scss';
import Places from 'components/map/Places';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import useApplicationData from 'hooks/useEventInfo';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Create = () => {
  const hrs = [...Array(26).keys()];
  const mins = [...Array(60).keys()]; 

  const hrsList = hrs.map((hr) => {
    if(hr === 0) {
      return <option className="dropdown-item" selected>{'0' + hr}</option>
    }
    if(hr < 10 && hr > 0) {
      return <option className="dropdown-item">{'0' + hr}</option>
    }else {
      return <option className="dropdown-item">{''+ hr} </option>
    }
  });

  const minList = mins.map((min) => {
    if(min === 0) {
      return <option className="dropdown-item" selected>{'0' + min}</option>
    }
    if(min < 10 && min > 0) {
      return <option className="dropdown-item">{'0' + min}</option>
    }else {
      return <option className="dropdown-item">{''+ min} </option>
    }
  });

  

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const photoInput = useRef(null);
  const DateInput = useRef(null);
  const spotsInput = useRef(null);

  const [formData, setFormData] = useState({
    title:"",
    basicUrl: "",
    fee: 0,
    hour: 0,
    min: 0,
    spots: 0,
    address:"",
    description: "",
    lat:0 ,
    lng:0,
    user: 0,
    selectDay:""
  });
  const [validate, setValidate] = useState({
    validTitle : "d-none",
    validDrescription: "d-none",
    validPhoto: "d-none",
    validDate: "d-none",
    validSpots: "d-none"
  });
  const [validAddress, setValidAddress] = useState("d-none");
  const [coords, setCoords] = useState({});
  const [selectDay, setSelectDay] = useState("");
  
  const user = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate(`/`);
    window.location.reload();
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
    });
  },[coords,selectDay]);

  useEffect(()=> {
      setValidate(prev => { return {...prev, validTitle: "d-none"}});
  },[formData.title]);

  useEffect(()=> {
    setValidate(prev => { return {...prev, validDrescription: "d-none"}});
},[formData.description]);

  useEffect(()=> {
    setValidate(prev => { return {...prev, validPhoto: "d-none"}});
  },[formData.basicUrl]);

  useEffect(()=> {
    setValidate(prev => { return {...prev, validDate: "d-none"}});
  },[formData.selectDay]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.title){
      setValidate(prev => { return {...prev, validTitle: ""}});
      titleInput.current.focus();
      return;
    }

    if(!formData.description){
      setValidate(prev => { return {...prev, validDrescription: ""}});
      descriptionInput.current.focus();
      return;
    }

    if(!formData.basicUrl){
      setValidate(prev => { return {...prev, validPhoto: ""}});
      photoInput.current.focus();
      return;
    }

    if(!formData.selectDay){
      setValidate(prev => { return {...prev, validDate: ""}});
      DateInput.current.focus();
      return;
    }


    if(!formData.spots){
      setValidate(prev => { return {...prev, validSpots: ""}});
      DateInput.current.focus();
      return;
    }

    if(!coords.lat || !coords.lng){
      setValidAddress("");
      return;
    }

     axios.post('/create', JSON.stringify(formData)).then( (data) => {
        console.log(data.data);
        axios.get('/events').then(() => {
          data && navigateHome();
        })
     })
  }

  const handleChange = (e) => {
    setFormData(prev =>  { 
      return {...prev, [e.target.id]: e.target.value 
      }
    });
  }

  

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h5 className='create__description-title'>Describe the Event</h5>
      <section className='create__description'>
        <h5>Event Title</h5>
        <div className={`alert alert-warning ${validate.validTitle}`} role="alert">
          Please Enter a title 
        </div>
        <div className="input-group mb-3">
       
          <span className="input-group-text">Event Title</span>
          <input
            type="text"
            className="form-control"
            ref={titleInput}
            id="title"
            aria-label="The title"
            minLength="1"
            maxLength="40"
            onChange={handleChange}
            value={formData.title}
            
          />
        </div>
        <div className="mb-3">
          <h5>Event Description</h5>
          <div className={`alert alert-warning ${validate.validDrescription}`} role="alert">
            Please Enter a event description 
          </div>
          <textarea
            className="form-control"
            id="description"
            ref={descriptionInput}
            rows="3"
            minLength="1"
            maxLength="350"
            onChange={handleChange}
            value={formData.description}
            
          >
          </textarea>
        </div>
        <h5>Event Photo</h5>
        <div className={`alert alert-warning ${validate.validPhoto}`} role="alert">
            Please Enter a event description 
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="eventPhotoControlInput">https://example.com/users/</span>
          <input
            type="text"
            className="form-control"
            id="basicUrl"
            ref={photoInput}
            aria-describedby="eventPhotoControlInput"
            maxlength="255"
            onChange={handleChange}
            value={formData.basicUrl}
            
          />
        </div>
      </section>

      <h5 className='create__date-time-title'>Date and time</h5>
      
      <section className='create__date-time'>
        <div>
        <div className={`alert alert-warning ${validate.validDate}`} ref={DateInput} role="alert">
          Please select a valid date 
        </div>
          <h5 className='calendar-title'>Choose a Date</h5>
          <Calendar onSelect={setSelectDay} selected={selectDay} />
        </div>

        <div className='date-time-sub'>
          <div className="input-group mb-3"> 
            <label class="input-group-text date-time-hr" for="hour">hr</label>
            <select
              className="form-select"
              id="hour" 
              onChange={handleChange}
              value={formData.hour}
              
            >
              {hrsList}
            </select>

            <label className="input-group-text date-time-min" for="min">min</label>
            <select
              className="form-select"
              id="min" 
              onChange={handleChange}
              value={formData.min}
              
            >
              {minList}
            </select>
            <h5>{formData.hour}+++++++++++++++ {formData.min}</h5>
           
          </div>
          <div></div>
        </div>
      </section>

      <h5 className='create__event-logistics-title'>Logistics</h5>
      <section className=' create__event-logistics'>
        <div className={`alert alert-warning ${validAddress}`} role="alert">
          Please enter a valid address 
        </div>
        <h5>Address</h5>
        <div class="input-group mb-3">
          <span class="input-group-text">Address</span>
          <Places setCoords={setCoords} setValidAddress={setValidAddress} />
        </div>
        <h5>Entry fee & # of spots for the event</h5>
        <div className='sub-group2'>
          <div className="input-group mb-3">
            <span className="input-group-text">Entry fee</span>
            <span className="input-group-text">$</span>
            <input
            type="number"
            className="form-control cost"
            aria-label="Dollar amount (with dot and two decimal places)"
            id="fee"
            min="0"
            onChange={handleChange}
            value={formData.fee}
            
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Spots</span>
            <div className={`alert alert-warning ${validate.validSpots}`}  role="alert">
            Please select a valid date 
          </div>
            <input
              type="number" 
              className="form-control" 
              aria-label="Spots for event"
              id="spots"
              ref={spotsInput}
              min="1"
              onChange={handleChange}
              value={formData.spots}
              
            />
          </div>
        </div>
      </section>
      <button onClick={"location.href='/'"} type="submit" className="btn btn-primary submit-btn">Submit</button>
    </form>
  );
};

export default Create;