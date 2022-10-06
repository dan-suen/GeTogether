import React, {useState, useEffect} from 'react';
import './main.scss'

import Intro from './Intro';
import Event from '../main_logged/event'
import Search from './Search';
import NextEvent from './NextEvent';
import EventsList from '../event/EventsList'
import Calendar from 'components/main_logged/calender';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Main = (props) => {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [range, setRange] = useState("");
  useEffect(() => {
    let filtered =  props.state.events.filter(element => {
      return element.event_name.toLowerCase().includes(searchQuery.toLowerCase())|| element.location.toLowerCase().includes(searchQuery.toLowerCase())|| element.description.toLowerCase().includes(searchQuery.toLowerCase())
    })
    if (selected){
      filtered =  filtered.filter(element => {
        let chose = format(new Date(selected), "MMMM d yyyy")
        let compare = format(new Date(element.event_time), "MMMM d yyyy")
            return (new Date(chose) - new Date(compare)) === 0
      })
    }
    if (range) {
      filtered =  filtered.filter(element => {
        let chose = format(new Date(), "MMMM")
        let compare = format(new Date(element.event_time), "MMMM")
            return chose === compare
      })
    }
    if (filtered.length === 0){
      setEvents([<p>No Events Here! <FontAwesomeIcon icon={faFaceSadCry}/></p>])
    } else {
      console.log(filtered)
      setEvents(filtered.map(element => {
        return <li className="list-group-item"><div><Event event = {element}></Event></div></li>
      }))
    }
  }, [props.state.events, range, selected, searchQuery]);
  return (
    <section className='page'>
      <section className='page__intro'>
        <Intro></Intro>
      </section>
      <section className='page__calendar-and-events'>
        <section className='page__calendar-and-events__calendar'>
          <Calendar onSelect={setSelected} selected={selected}></Calendar>
          
        </section>
        <section className='page__calendar-and-events__next-event'>
          <NextEvent></NextEvent>
        </section>
      </section>

      <section className='page__filters'>
      <div className="input-group search">
        <Search onSubmit = {setSearchQuery} onClick={setRange}></Search>
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

export default Main;