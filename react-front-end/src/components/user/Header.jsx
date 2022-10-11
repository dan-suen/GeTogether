import React from 'react';
import './header.scss'
import {format} from 'date-fns';

const Header = (props) => {
  return (
    <div className='header'>
      
      {/* <h5>{props.user.username}</h5> */}
      <h5>Joined {format(new Date(`${props.user.createdAt}`), "MMMM d yyyy - h:mm a")}</h5>
    </div>
  );
};

export default Header;