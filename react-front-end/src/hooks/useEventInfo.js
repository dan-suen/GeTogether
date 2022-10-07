import { useEffect, useState } from "react";
import axios from "axios";
import {format} from 'date-fns';

export default function useApplicationData(id) {
  //overall local state object for client side rendering
  const [bigData, setBigData] = useState({
    event : [],
    host: [],
    goers: [],
    time:[]
  });
  //fetches data from api and sets state
  useEffect(() => {
    if (id) {
      Promise.all([
        axios.get(`/events/${id}`),
        axios.get(`/events/${id}/host`),
        axios.get(`/events/${id}/attendees`),
      ]).then((data) => {
        setBigData((prev) => {
          return {
            ...prev,
              event: data[0].data[0],
              host: data[1].data[0],
              goers: data[2].data.map(element => {
                return (
                  <div className="card card-body attendee">
                    <div>
                      <h5 className='card-title attendee__name'>{element.username}</h5>
                      <img src={element.photo} alt="" />
                    </div>
                    <p className="attendee-title">
                      Attendee
                    </p>
                  </div>
                )
              }),
              time: [<p>{format(new Date(`${data[0].data[0].event_time}`), "MMMM d yyyy - h:mm a")}</p>]
            };
          })
        })
      }
    }, [])
  return { bigData};
}
