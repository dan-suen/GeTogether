import React, {useState, useEffect} from 'react';
import './main.scss'

import Intro from './Intro';
import Event from '../main_logged/event'
import Search from './Search';
import NextEvent from './NextEvent';
import EventsList from '../event/EventsList'
import Calendar from 'components/main_logged/calender';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Main = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  useEffect(() => {
    let filtered = props.state.events.filter(element => {
      if (searchQuery === ""){
        return element;
      }
      return element.event_name.toLowerCase().includes(searchQuery.toLowerCase())|| element.location.toLowerCase().includes(searchQuery.toLowerCase())|| element.description.toLowerCase().includes(searchQuery.toLowerCase())
    })
    setEvents(filtered.map(element => {
      return <li className="list-group-item"><div><Event event = {element}></Event></div></li>
    }))
  }, [searchQuery]);
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
        <Search onChange = {setSearchQuery}></Search>
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