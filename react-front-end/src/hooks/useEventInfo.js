import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  //overall local state object for client side rendering
  const [bigData, setBigData] = useState({
    host: [],
    attendees: [],
  });

  //fetches data from api and sets state
  useEffect(() => {
    Promise.all([
      axios.get("/events:id"),
      axios.get("/events:id/attendees"),
    ]).then((data) => {
      setBigData((prev) => {
        return {
          ...prev,
          host: data[0].data,
          attendees: data[1].data,
        };
      });
    });
  }, []);
  return { data };
}
