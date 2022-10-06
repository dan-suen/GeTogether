import React from 'react';
import './eventPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {format} from 'date-fns';

const EventPage = (props) => {
  return (
    <section className='event-page'>
      <section className='event-page__header'>
        
        <div className='hosted-by card' >
          <div className="card-body">
            <h5 className="card-title">Hosted by:</h5>
          </div>
          <a href='to user profile'>
            <img className="card-img-top wallace" src='/images/wallace.png' alt="Scotish Event"/ >
          </a>
          <div className="host-title">
          {props.event.host_id}
          </div>
          
        </div>
        <div className='date-time'>
          <h5>{props.event.event_name}</h5>
          <p>{format(new Date(props.event.event_time), "MMMM d yyyy - h:mm a")}</p>
        </div>
        <div></div>
      </section>

      <section className='event-page__info'>
      
          <div className="column">
            <div className="event-page__info__thumbnail">
              <img src="/images/braveheart_battle.jpg" alt="Event thumb nail" />
            </div>
            <div className="event-page__info__description">
              <div className='details'>
                <h5>Details</h5>
                <p>{props.event.description}
                </p>
              </div>
            </div>

          </div>

          <div className="column">
            <div className="event-page__info__event-info">
              <div className='card'>
                <div className="event-page__info__map">
                    map
                 </div>
                <div className="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item event-item">
                    <FontAwesomeIcon className='event-item__icon' icon={faLocationDot}/>
                    <p>{props.event.location}</p>
                  </li>
                  <li class="list-group-item event-item">
                    <FontAwesomeIcon className='event-item__icon' icon={faCalendar}/>
                    <p>{format(new Date(props.event.event_time), "MMMM d yyyy - h:mm a")}</p>
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
                   <h5 className='card-title attendee__name'>Willaim Wallace</h5>
                    <img src="/images/wallace.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Host
                    <FontAwesomeIcon icon={faStar}/>
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>Yourtuber</h5>
                    <img src="/images/apple.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Happy
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>Greg Howitzer</h5>
                    <img src="/images/default.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Cook
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>George Kat</h5>
                    <img src="/images/default.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Programmer
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>Cat Man</h5>
                    <img src="/images/default.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Doger
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>Jorge Masvidal</h5>
                    <img src="/images/default.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Serial Killer
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>Conor Magnet</h5>
                    <img src="/images/default.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Gamer
                  </p>
              </div>
              <div className="card card-body attendee">
                  <div>
                   <h5 className='card-title attendee__name'>Jimmy Blog</h5>
                    <img src="/images/default.png" alt="" />
                  </div>
                  <p className="attendee-title">
                    Madman
                  </p>
              </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventPage;