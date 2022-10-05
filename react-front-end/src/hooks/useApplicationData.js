import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  //overall local state object for client side rendering
  const [state, setState] = useState({
    users: [],
    events: {},
  });

  //fetches data from api and sets state
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((data) => {
      setState((prev) => {
        return {
          ...prev,
          days: data[0].data,
          appointments: data[1].data,
          interviewers: data[2].data,
        };
      });
    });
  }, []);

  //function for setting current day value in state
  const setDay = (day) => setState({ ...state, day });

  //fetches new days obj from server on appointment updates
  const getNewDaysObj = function () {
    return axios.get("/api/days").then((results) => {
      return results.data;
    });
  };

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    //updates api data
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      getNewDaysObj().then((data) => {
        const newDays = data;
        //sets local state
        setState((prev) => {
          return { ...prev, days: newDays, appointments: appointments };
        });
      });
    });
  };

  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    //updates api data
    return axios.delete(`/api/appointments/${id}`).then(() => {
      getNewDaysObj().then((data) => {
        const newDays = data;
        //sets local state
        setState((prev) => {
          return { ...prev, days: newDays, appointments: appointments };
        });
      });
    });
  };
  return { state, setDay, bookInterview, cancelInterview };
}
