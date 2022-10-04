import React, { useState} from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import "./calender.scss";


export default function Calendar(props) {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  
  const disabledDays = [
    { before: new Date() }
  ];
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      showOutsideDays
      disabled={disabledDays}
    />
  );
}
