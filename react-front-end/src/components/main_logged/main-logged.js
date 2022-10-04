import "./main-logged.scss";
import Calendar from './calender.js';
import Next from './next_event.js';
import Event from './event.js';
import Button from './filter_button.js';

export default function Logged(props) {
  return (
    <>
      <div class = "filter-container">
        <Button/>
        <Button/>
        <Button/>
      </div>
      <div class="main-body">
        <div class="page-left">
          <Calendar />
          <Next />
        </div>
        <div class="page-right">
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </>
  );
}