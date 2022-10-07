import React, {useState, useEffect} from 'react';
import './nextEvent.scss'
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';

const NextEvent = (props) => {
  let event = props.event
  const [div, setDiv] = useState([]);
  const navigate = useNavigate();
  const navigateToEvent = () => {
    // 👇️ navigate to /contacts
    navigate(`/event/${event.id}`);
  };
  useEffect(() => {
    if(event){
      setDiv([
        <h5>NEXT EVENT : </h5>,
        <div className="main-timer" style={{backgroundImage: `url(${event.photo})`}}>
          <div className="centered">
          {event.time_until.hours?event.time_until.hours:0}h:{event.time_until.minutes?event.time_until.minutes:0}m:{event.time_until.seconds?event.time_until.seconds:0}s:{event.time_until.milliseconds?event.time_until.milliseconds:0}ms
          </div>
          {/* <img src={event.photo} className="img-fluid rounded-start" alt="..."/> */}
        </div>,
        <h5 className="">{event.event_name}</h5>,
        <p className="">Time: {format(new Date(event.event_time), "MMMM d yyyy - h:mm a")}</p>
        ])
    }
    }, [event])
  return (
    <div onClick={navigateToEvent} className=" mb-3 next-event" >
      {div}
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