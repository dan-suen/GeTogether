import React from 'react';
import './main.scss'
import Intro from './Intro';
import Search from './Search';


const Main = () => {
  return (
    <section className='page'>

      <section className='page__intro'>
        <Intro></Intro>
      </section>

      <section className='page__filters'>
        <Search></Search>
      </section>

      <section className='page__events-list'>
        <h5 className='page__events-list__title'>Your Events</h5>
      </section>

    </section>
  );
};

export default Main;