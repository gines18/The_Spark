import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showBox, setClicked] = useState(false);

  function donate() {
    setClicked(!showBox)
}


  return (
    <>
    <div className="navbar_container">
      <div>
        <img src="./fireworks.png" style={{ width: "50px" }} alt="" />
      </div>

      <div className="navbar_menu">
        <ul>
          <li>
            <img src="./loupe.png" style={{ width: "11px" }} alt="" />
          </li>
          <li>Counseling</li>
          <li>Training</li>
          <li>About Us</li>
          <li id="navbar_button" onClick={donate}>Donate</li>
        </ul>
      
      {showBox && ( 
      <p id="popup_donation">Thank you for help!</p>
      )}
    </div>
    </div>
    </>
  );
}

export default Navbar;
