import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./event.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function Event(props) {
  const event = props.event;
  const navigate = useNavigate();
  const navigateToEvent = () => {
    // 👇️ navigate to /contacts
    navigate(`/event/${event.id}`);
  };
  return (
    <Card key="light">
      <div className="card card-class mb-3">
        <div className="row g-0">
          <div onClick={navigateToEvent} className="col-md-4">
            <img src={event.photo} />
          </div>


          <div className="col-md-8">
            <div className="main card card-class">
              
              <Card.Body>
                <div className="titlecard">
                  <div onClick={navigateToEvent} className='title' >
                    <Card.Title style={{color: "red"}}>{event.event_name}</Card.Title>
                    <p className="comment-number">
                      {event.comment_number}  <FontAwesomeIcon icon={faComment}/>
                    </p>
                  </div>
                </div>
                <div onClick={navigateToEvent}className="content">
                  <div className="header">
                    <Card.Header>Location: {event.location}</Card.Header>
                    <Card.Header>Time: {format(new Date(event.event_time), "MMMM d yyyy - h:mm a")}</Card.Header>
                    <Card.Header>${event.price/100}</Card.Header>
                  </div>
                  <Card.Text>
                  {event.description}
                  </Card.Text>
                </div>
                <Card.Footer onClick={navigateToEvent}>
                  <p className="text-muted">{event.remaining_spots} spots remaining</p>
                  <p className="text-muted">Posted: {format(new Date(event.createdAt), "MMMM d yyyy")}</p>
                </Card.Footer>
              </Card.Body>
            </div>


          </div>
        </div>
      </div>
    </Card>
  );
}