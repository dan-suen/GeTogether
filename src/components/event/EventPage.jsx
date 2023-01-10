import React from 'react';
import { useParams } from 'react-router-dom';
import './eventPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar, faStar, faDollarSign,faPerson} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useEventInfo from "hooks/useEventInfo";
import JoinButton from '../main/join';
import Map from "../map/Map"


const EventPage = () => {
  const {id} = useParams();
  const { bigData } = useEventInfo(id);
  const { event, host, time, goers} = bigData;
  return (
    <section className='event-page'>
       <section className='event-page__header'>
        
        <div className='hosted-by card' >
           <div className="card-body">
             <h5 className="card-title">Hosted by:</h5>
          </div>
          
          <img className="card-img-top wallace" src={host.photo} alt="Scotish Event"/ >
         
          <div className="host-title">
           {host.username}
          </div>
          
         </div>
         <div className='date-time'>
           <h5>{event.event_name}</h5>
           {time}
         </div>
         <div><JoinButton eventId={id} hostId={host.id} /></div>
       </section>

       <section className='event-page__info'>
      
           <div className="column-picture-details">
             <div className="event-page__info__thumbnail">
               <img src={event.photo} alt="Event thumb nail" />
             </div>
             <div className="event-page__info__description">
               <div className='details'>
                 <h5>Details</h5>
                 <p>{event.description}
                 </p>
               </div>
             </div>

           </div>

           <div className="column-map-card">
             <div className="event-page__info__event-info">
               <div className='card'>
                 <div className="event-page__info__map">
                    {}
                     <Map lat={event.lat} lng={event.lng}/>
                  </div>
                 <div className="card-body">
                 <ul className="list-group list-group-flush">
                   <li className="list-group-item event-item d-flex justify-content-center">
                     <FontAwesomeIcon className='event-item__icon' icon={faLocationDot}/>
                     <p>{event.location}</p>
                   </li>
                   <li className="list-group-item event-item d-flex justify-content-center">
                     <FontAwesomeIcon className='event-item__icon' icon={faCalendar}/>
                     <p>{time}</p>
                   </li>
                   <li className="list-group-item event-item d-flex justify-content-center">
                      
                     <FontAwesomeIcon className='event-item__icon' icon={faDollarSign}/>
                     <p>{(event.price/100).toFixed(2)}</p>
                   </li>
                   <li className="list-group-item event-item d-flex justify-content-center">
                     <FontAwesomeIcon className='event-item__icon' icon={faPerson}/>
                     <p >{event.spots}</p>
                   </li>
                 </ul>
                 </div>
               </div>
             </div>
           </div>

       
       </section>

       <section className='event-page__attendees'>
         <div className="container-fluid py-2">
           <h2 className="font-weight-light">Who's Going?</h2>
           <div className="d-flex flex-row flex-nowrap attendees">
               <div className="card card-body attendee">
                   <div>
                    <h5 className='card-title attendee__name'>{host.username}</h5>
                    <img src={host.photo} alt="" />
                   </div>
                   <p className="attendee-title">
                     Host
                     <FontAwesomeIcon icon={faStar}/>
                   </p>
               </div>
               {goers}
           </div>
         </div>
       </section>
    </section>
  );
};

export default EventPage;