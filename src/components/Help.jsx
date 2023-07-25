import React from "react";
import "./Help.css";

function Help() {

  const handleCall = () => {
    window.location.href = `tel:${123456789}`;
  };

  return (
    <>
      <div id="help_container">
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
      </div>
    </>
  );
}

export default Help;
