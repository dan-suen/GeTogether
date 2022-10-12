import React, {useState, useEffect} from 'react';
import './past.scss'

import Event from './event'
import EventsList from './EventsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'
import ScrollToTop from '../scrollTop/ScrollToTop'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Past = (props) => {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [range, setRange] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };


  useEffect(() => {
    let filtered =  props.state.events
    //filter using calendar
    
    //filters out upcoming events
    filtered =  filtered.filter(element => {
      return !element.active
    })
    if (filtered.length === 0){
      setEvents([<p>No Events Here! <FontAwesomeIcon icon={faFaceSadCry}/></p>])
    } else {
      setEvents(filtered.map(element => {
        return <li className="list-group-item"><div><Event event={element}></Event></div></li>
      }))
    }
  }, [props.state.events, range, selected, searchQuery]);
  return (
    <section className='past-events'>
      <section className='past-events__intro'>
        <div>
          <h1>Past Events</h1>
        </div>
        
      </section>

      <section className='past-events__events-list'>
       <EventsList>
        {events}
       </EventsList>
      </section>
      <div className="scroll-btn">
        {showButton && (
          <ScrollToTop scrollToTop={scrollToTop}/>
        )}
      </div>
    </section>
  );
};

export default Past;