import React from 'react';
import './main.scss'
import Intro from './Intro';
import Event from '../main_logged/event'
import Search from './Search';
import NextEvent from './NextEvent';

import Calendar from 'components/main_logged/calender';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Main = () => {
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
        <Search></Search>
      </section>

      <section className='page__events-list'>
        <div className='page__events-list__header'>
          <h5>Your Events</h5>
          <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><div><Event></Event></div></li>
          <li className="list-group-item"><div><Event></Event></div></li>
          <li className="list-group-item"><div><Event></Event></div></li>
        </ul>
      </section>

    </section>
  );
};

export default Main;