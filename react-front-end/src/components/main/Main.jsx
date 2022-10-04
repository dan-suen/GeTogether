import React from 'react';
import './main.scss'
import Intro from './Intro';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <section className='page'>
      <section className='page__intro'>
        <Intro></Intro>
      </section>

      <section className='page__next-and-calendar'></section>

      <section className='page__filters'>
        <Search></Search>
      </section>

      <section className='page__events-list'>
        <div className='page__events-list__header'>
          <h5>Your Events</h5>
          <button className=''><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </section>

    </section>
  );
};

export default Main;