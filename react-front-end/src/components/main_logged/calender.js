import React, { useState} from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import "./calender.scss";


export default function Calendar(props) {

  let footer = <p>Please pick a day.</p>;
  if (props.selected) {
    footer = <p>You picked {format(props.selected, 'PP')}.</p>;
  }
  
  const disabledDays = [
    { before: new Date() }
  ];
  return (
    <DayPicker
      mode="single"
      selected={props.selected}
      onSelect={props.onSelect}
      footer={footer}
      showOutsideDays
      disabled={disabledDays}
    />
  );
}
