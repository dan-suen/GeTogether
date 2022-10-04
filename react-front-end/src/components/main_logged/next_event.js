import "./next_event.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'

export default function Next(props) {
  return (
    <div class="next">
      <img src="https://loremflickr.com/cache/resized/65535_52084710409_8f98a986ee_c_640_480_nofilter.jpg" />
      <div class="next-text">
        <p>This is an event name</p>
        <p><FontAwesomeIcon icon={faClock}/>  Location and time</p>
      </div>
    </div>
  );
}