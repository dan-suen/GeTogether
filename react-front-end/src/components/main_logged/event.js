import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./event.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-regular-svg-icons'

export default function Event(props) {
  return (
    <Card key="light" >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://loremflickr.com/cache/resized/65535_52084710409_8f98a986ee_c_640_480_nofilter.jpg" />
          </div>


          <div className="col-md-8">
            <div className="main card">
              
              <Card.Body>
                <div className="titlecard">
                  <div className='title'>
                    <Card.Title>This is an event nameThis is an event name</Card.Title>
                    <p className="comment-number">
                      45  <FontAwesomeIcon icon={faComment}/>
                    </p>
                  </div>
                  <Button variant="success">
                    Join <FontAwesomeIcon icon={faEnvelope} />
                  </Button>
                </div>
                <div className="content">
                  <div className="header">
                    <Card.Header>Location and time</Card.Header>
                    <Card.Header>$4000</Card.Header>
                  </div>
                  <Card.Text>
                  This is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event description
                  </Card.Text>
                </div>
                <Card.Footer>
                  <p className="text-muted">5 spots remaining</p>
                  <p className="text-muted">Last updated 3 mins ago</p>
                </Card.Footer>
              </Card.Body>
            </div>


          </div>
        </div>
      </div>
    </Card>
  );
}