import React from 'react';
import './user.scss';
import Header from './Header';
import Description from './Description';
import EventsList from 'components/event/EventsList';
import Event from 'components/main_logged/event';

const User = () => {
  return (
   <section className='user'>
    <section className='user__header'>
      <Header></Header>
    </section>

    <section className='user__user-description'>
      <Description></Description>
    </section>

    <section className='user__events-list'>
    <EventsList>
        <li className="list-group-item"><div><Event></Event></div></li>
        <li className="list-group-item"><div><Event></Event></div></li>
        <li className="list-group-item"><div><Event></Event></div></li>
    </EventsList>
    </section>
   </section>
  );
};

export default User;