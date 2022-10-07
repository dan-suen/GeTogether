import { useEffect, useState } from "react";
import axios from "axios";
import Event from '../components/main_logged/event'
import Header from '../components/user/Header';
import Description from '../components/user/Description';
import EventsList from '../components/event/EventsList';


export default function useUserData() {
  const [rendered, setRendered] = useState([<h1>PLEASE LOGIN!!</h1>])
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if(user !== null){
      Promise.all([
        axios.get(`/users/${user.id}`),
        axios.get(`/users/${user.id}/host`),
        axios.get(`/users/${user.id}/join`),
      ]).then((data) => {
        let userEvents = 
          {
            user: data[0].data[0],
            hosting: data[1].data,
            joining: data[2].data,
          }
        setRendered([
          <section className='user__header'>
            {/* <Header user={userEvents.user}></Header> */}
          </section>,
          <section className='user__user-description'>
            <Description user={userEvents.user}></Description>
          </section>,
          <section className='user__events-list'>
            <EventsList>
              <h1>Hosting :</h1>
                {userEvents.hosting.map((element) => {
                return <li className="list-group-item"><div><Event event={element}></Event></div></li>
                })}
              <br/>
              <h1>Attending :</h1>
              {userEvents.joining.map((element) => {
                return <li className="list-group-item"><div><Event event={element}></Event></div></li>
                })}
            </EventsList>
          </section> 
          ]);
        });
    }
  }, []);
  return { rendered };
}
