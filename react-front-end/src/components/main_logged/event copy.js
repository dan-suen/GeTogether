import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./event.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Event(props) {
  return (
    <Card key="light" style={{ width: '70%' }}>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://loremflickr.com/cache/resized/65535_52084710409_8f98a986ee_c_640_480_nofilter.jpg" />
          </div>
          <div class="col-md-8">
            <div class="main card"></div>
              <Card.Body>
                <div class="title">
                  <Card.Title>This is an event name</Card.Title>
                  <Button variant="primary">
                    Join <FontAwesomeIcon icon={faEnvelope} />
                  </Button>
                </div>
                <div class="content">
                  <div class="header">
                    <Card.Header>Location and time</Card.Header>
                    <Card.Header>$4000</Card.Header>
                  </div>
                  <Card.Text>
                  This is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event descriptionThis is an event description
                  </Card.Text>
                </div>
              </Card.Body>
            </div>
            <Card.Footer>
              <p className="text-muted">5 spots remaining</p>
              <p className="text-muted">Last updated 3 mins ago</p>
            </Card.Footer>
          </div>
        </div>
    </Card>
  );
}