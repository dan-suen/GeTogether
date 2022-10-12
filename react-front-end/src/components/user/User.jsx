import React, { useState, useEffect } from 'react';
import './user.scss';
import useUserData from  "hooks/useUserData";
import ScrollToTop from '../scrollTop/ScrollToTop'


const User = () => {
  const {rendered} = useUserData();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
   <section className='user'>
    {rendered}
    <div className="scroll-btn">
      {showButton && (
        <ScrollToTop scrollToTop={scrollToTop}/>
      )}
      </div>
   </section>
  );
};

export default User;