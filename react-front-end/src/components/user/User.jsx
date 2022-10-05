import React from 'react';
import './user.scss';
import Header from './Header';
import Description from './Description';

const User = () => {
  return (
   <section className='user'>
    <section className='user__header'>
      <Header></Header>
    </section>

    <section className='user__user-description'>
      <Description></Description>
    </section>

    <section className='user__event-list'>
      
    </section>
   </section>
  );
};

export default User;