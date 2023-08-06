import React from "react";
import "./Help.css";
import {motion} from 'framer-motion'

function Help() {

  const handleCall = () => {
    window.location.href = `tel:${123456789}`;
  };

  return (
    <>
      <motion.div id="help_container"
      initial={{
        y: "100px"
      }}

       whileInView={{
          y: 0 ,
          transition: {
            duration: 3,
          },
        }}

      
      
      
      >
        <div>
          <h1>Need Help Now?</h1>
          <p>
            The Counselling Helpline is here when you want to talk to someone
            about <br /> your mental health, your emotions or a relationship
            problem.
          </p>
        </div>

        <div id="help_button">
          <p onClick={handleCall}>Call Now</p>
        </div>
      </motion.div>
    </>
  );
}

export default Help;
