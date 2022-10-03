import React from 'react';
import './intro.scss';

const Intro = () => {
  return (
    <section className='intro'>
      <div className='intro__div'>
        <h2 className='intro__div__title'>Celebrating less than a years worth of making false connections on Getogether :D</h2>
        <p className='intro__div__description'>If your looking to do something this year, Getogether has you covered, for less than a year people have turned to Getogether to meet people, make friends, find support, grow their pot (I mean business) and explore the outside world. Lots of events are happening daily</p>
      </div>
      <div className='intro__div'>
        <a href='/about'>
          <img className='intro__div__image' src='/images/together.png' alt='The intro logo'/>
        </a>
      </div>
    </section>
  );
};

export default Intro;