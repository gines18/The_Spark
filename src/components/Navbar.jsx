import React, { useState } from "react";
import "./Navbar.css";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [showBox, setClicked] = useState(false);
  const [showBoxSearch, setClickedSearch] = useState(false);


  function donate() {
    setClicked(!showBox);
  }
  
  function search() {
    setClickedSearch(!showBoxSearch);
  }

  return (
    <>
      <div className="navbar_container">
        <div>
          <img
            id="spark"
            src="./fireworks.png"
            style={{ width: "50px" }}
            alt=""
          />
        </div>

        <div className="navbar_menu">
          <ul>
            <li onClick={search}>
              <img src="./loupe.png" style={{ width: "11px" }} alt="" />
            </li>

            <li>
              <ScrollLink to="counseling-section" 
              smooth={true} offset={-120} duration={10} easing="linear">
                Counseling
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="counseling-training"  smooth={true} offset={-120} duration={10} easing="linear">
                Training
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="counseling-about"  smooth={true} offset={-120} duration={10} easing="linear">
                About Us
              </ScrollLink>
            </li>
            <li id="navbar_button" onClick={donate}>
              Donate
            </li>
          </ul>

          {showBox && (
            <>
          
                <p id="popup_donation">
                  <span id="navbar_donate_button" onClick={donate}>
                    X
                  </span>
                 Donations coming soon!
                </p>
              
            </>
          )}
          {showBoxSearch && (
            <>
             
                <p id="popup_donation">
                  <span id="navbar_donate_button" onClick={search}>
                    X
                  </span>
                  We are working to implement search bar on this website!
                </p>
      
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
