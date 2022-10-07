import React, { useState, useEffect } from 'react';
import './user.scss';
import useUserData from  "hooks/useUserData";



const User = () => {
  const {rendered} = useUserData()
  return (
   <section className='user'>
    {rendered}
   </section>
  );
};

export default User;