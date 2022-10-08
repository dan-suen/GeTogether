import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  //overall local state object for client side rendering
  const [state, setState] = useState({
    users: [],
    events: [],
  });

  //fetches data from api and sets state
  useEffect(() => {
    Promise.all([
      axios.get("/users"),
      axios.get("/events"),
    ]).then((data) => {
      setState((prev) => {
        return {
          ...prev,
          users: data[0].data,
          events: data[1].data,
        };
      });
    });
  }, []);
  return { state,setState };
}
