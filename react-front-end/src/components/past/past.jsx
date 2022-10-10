import React, {useState, useEffect} from 'react';
import './past.scss'

import Event from './event'
import EventsList from './EventsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Past = (props) => {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [range, setRange] = useState("");
  useEffect(() => {
    let filtered =  props.state.events
    //filter using calendar
    
    //filters out upcoming events
    filtered =  filtered.filter(element => {
      return !element.active
    })
    if (filtered.length === 0){
      setEvents([<p>No Events Here! <FontAwesomeIcon icon={faFaceSadCry}/></p>])
    } else {
      setEvents(filtered.map(element => {
        return <li className="list-group-item"><div><Event event={element}></Event></div></li>
      }))
    }
  }, [props.state.events, range, selected, searchQuery]);
  return (
    <section className='page'>
      <section className='page__intro'>
        <div>
          <h1>Past Events</h1>
        </div>
        
      </section>

      <section className='page__events-list'>
       <EventsList>
        {events}
       </EventsList>
      </section>

    </section>
  );
};

export default Past;