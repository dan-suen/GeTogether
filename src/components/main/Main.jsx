import React, {useState, useEffect} from 'react';
import './main.scss'

import Intro from './Intro';
import Event from './event'
import Search from './Search';
import NextEvent from './NextEvent';
import EventsList from '../event/EventsList'
import Calendar from 'components/main/calender';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadCry } from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ScrollToTop from '../scrollTop/ScrollToTop'

const Main = (props) => {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [range, setRange] = useState("");
  const [next, setNext] = useState();
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
    let filtered =  props.state.events.filter(element => {
      //filters using search bar text
      return element.event_name.toLowerCase().includes(searchQuery.toLowerCase())|| element.location.toLowerCase().includes(searchQuery.toLowerCase())|| element.description.toLowerCase().includes(searchQuery.toLowerCase())
    })
    //filter using calendar
    if (selected){
      filtered =  filtered.filter(element => {
        let chose = format(new Date(selected), "MMMM d yyyy")
        let compare = format(new Date(element.event_time), "MMMM d yyyy")
            return (new Date(chose) - new Date(compare)) === 0
      })
    }
    //filters using search bar buttons
    if (range === "TMonth") {
      filtered =  filtered.filter(element => {
        let chose = format(new Date(), "MMMM")
        let compare = format(new Date(element.event_time), "MMMM")
            return chose === compare
      })
    }
    if (range === "Week") {
      filtered =  filtered.filter(element => {
        let chose = format(new Date(), "w")
        let compare = format(new Date(element.event_time), "w")
            return chose === compare
      })
    }
    if (range === "NMonth") {
      filtered =  filtered.filter(element => {
        let chose = Number(format(new Date(), "M")) + 1
        let compare = Number(format(new Date(element.event_time), "M"))
            return chose === compare
      })
    }
    //filters out past events
    filtered =  filtered.filter(element => {
      return element.active
    })
    //sorts results by date
    filtered = filtered.sort(function(a, b){
      return (a.event_time > b.event_time ? 1 : -1)
    });
    if (filtered.length === 0){
      setEvents([<p>No Events Here! <FontAwesomeIcon icon={faFaceSadCry}/></p>])
    } else {
      setEvents(filtered.map(element => {
        return <li className="list-group-item"><div><Event event={element}></Event></div></li>
      }))
    }
  }, [props.state.events, range, selected, searchQuery]);
  //sets next event
  useEffect(() => {
    let a = props.state.events
    .filter(element => {
      let chose = new Date()
      let compare = new Date(element.event_time)
      return compare > chose
    })
    .sort(function(a, b){
      return (a.event_time > b.event_time ? 1 : -1)
    })[0]
    setNext(a);
  }, [props.state.events]);
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
          <NextEvent event={next}></NextEvent>
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
      <div className="scroll-btn">
      {showButton && (
        <ScrollToTop scrollToTop={scrollToTop}/>
      )}
      </div>
    </section>
    
  );
};

export default Main;