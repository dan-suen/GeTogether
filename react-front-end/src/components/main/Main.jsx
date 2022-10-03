import React from 'react';
import './main.scss'
import Intro from './Intro';
import Search from './Search';


const Main = () => {
  return (
    <section className='page'>
      <div className='backdrop'>
      </div>
      <section className='page__intro'>
        <Intro></Intro>
      </section>

      <section className='page__filters'>
        <Search></Search>
      </section>

      <section className='page__events-list'>
        <h5 className='page__events-list__title'>Your Events</h5>
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