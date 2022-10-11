import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function JoinButton(props) {
  const { user, auth } = useContext(AuthContext);
  const [joined, setJoined] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.post('/events/joined', `userId=${user.id}&eventId=${props.eventId}`).then((res) => {
      setJoined(res.data);
      setResult(whatButton());
    });
  }, [joined]);

  const needAuth = (e) => {
    e.preventDefault();
    document.getElementById('basic-nav-dropdown').click();
  };

  const unregister = (e) => {
    e.preventDefault();

    axios.post('/events/unregister', `userId=${user.id}&eventId=${props.eventId}`).then((res) => {
      setJoined(false);
    });
  };

  const joinEvent = (e) => {
    e.preventDefault();

    axios.post(`/events/${props.eventId}/join`, `userId=${user.id}`).then((res) => {
      setJoined(true);
    });
  };

  const whatButton = () => {
    const result = [];
    console.log("Joined state: ", joined);
    if (!auth) {
      result.push(<button onClick={needAuth} class="btn btn-primary">Join <FontAwesomeIcon icon={faEnvelope} /></button>)
    } else {
      if (!joined) {
        result.push(<button onClick={joinEvent} class="btn btn-primary">Join <FontAwesomeIcon icon={faEnvelope} /></button>)
      } else {
        result.push(<button onClick={unregister} class="btn btn-primary">Unregister<FontAwesomeIcon icon={faEnvelope} /></button>);
      }
    }
    return result;
  };

  return (
    <div>{result}</div>);
};