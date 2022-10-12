import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./event.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import JoinButton from './join';

export default function Event(props) {
  const event = props.event;
  const navigate = useNavigate();
  const navigateToEvent = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <Card key="light">
      <div className="card card-main">
        <div className="card-main__body">
          <div onClick={navigateToEvent} className="card-main__body__image-div">
            <img alt='event_pic' src={event.photo} />
          </div>


            <div className="main card card-main__body__content">
                <div className="card-title title-card">
                  <div onClick={navigateToEvent} className='title'>
                    <Card.Title>{event.event_name}</Card.Title>
                    <p className="comment-number">
                      {event.comment_number}  <FontAwesomeIcon icon={faComment} />
                    </p>
                  </div>
                  <JoinButton eventId={event.id} hostId={event.host_id} navigateToEvent={navigateToEvent}></JoinButton>
                </div>
                <div onClick={navigateToEvent} className="card-content">
                  <div className="header">
                    <Card.Header>Location: {event.location}</Card.Header>
                    <Card.Header>Time: {format(new Date(event.event_time), "MMMM d yyyy - h:mm a")}</Card.Header>
                    <Card.Header>Price: ${(event.price / 100).toFixed(2)}</Card.Header>
                  </div>
                  <Card.Text>
                    {event.description}
                  </Card.Text>
                </div>
                <div className='card-footer footer-card' onClick={navigateToEvent}>
                  {/* <Card.Footer onClick={navigateToEvent}> */}
                    <p className="text-muted">{event.remaining_spots} spots remaining</p>
                    <p className="text-muted">Posted: {format(new Date(event.createdAt), "MMMM d yyyy")}</p>
                  {/* </Card.Footer> */}
                </div>
               
        
            


          </div>
        </div>
      </div>
    </Card>
  );
}