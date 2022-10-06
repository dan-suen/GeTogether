import React, {useState, useEffect} from 'react';
import './main.scss'

import Intro from './Intro';
import Event from '../main_logged/event'
import Search from './Search';
import NextEvent from './NextEvent';
import EventsList from '../event/EventsList'
import Calendar from 'components/main_logged/calender';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Main = (props) => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    let filtered =  props.state.events.filter(element => {
        return element.event_name.toLowerCase().includes(searchQuery.toLowerCase())|| element.location.toLowerCase().includes(searchQuery.toLowerCase())|| element.description.toLowerCase().includes(searchQuery.toLowerCase())
      })
    if (filtered.length === 0){
      setEvents([<p>No Events Here! <FontAwesomeIcon icon={faFaceSadCry}/></p>])
    } else {
      setEvents(filtered.map(element => {
        return <li className="list-group-item"><div><Event event = {element}></Event></div></li>
      }))
    }
  }, [props.state.events, searchQuery]);
  return (
    <section className='page'>
      <section className='page__intro'>
        <Intro></Intro>
      </section>

      <section className='page__calendar-and-events'>
        <section className='page__calendar-and-events__calendar'>
          <Calendar></Calendar>
          
        </section>
        <section className='page__calendar-and-events__next-event'>
          <NextEvent></NextEvent>
        </section>
      </section>

      <section className='page__filters'>
        <Search onSubmit = {setSearchQuery}></Search>
      </section>

      <section className='page__events-list'>
       <EventsList>
        {events}
       </EventsList>
      </section>

    </section>
  );
};

export default Main;