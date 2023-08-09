import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

let data = [
  {
    x: "X",
    text: "Donations coming soon!",
  },
];

function Navbar() {
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [showBoxSearch, setShowBoxSearch] = useState(false);

  function toggleDonationPopup() {
    setShowDonationPopup(!showDonationPopup);
  }

  function toggleSearchPopup() {
    setShowBoxSearch(!showBoxSearch);
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
            <li onClick={toggleSearchPopup}>
              <img src="./loupe.png" style={{ width: "11px" }} alt="" />
            </li>

            <li>
              <ScrollLink
                to="counseling-section"
                smooth={true}
                offset={-120}
                duration={10}
                easing="linear"
              >
                Counseling
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="counseling-training"
                smooth={true}
                offset={-120}
                duration={10}
                easing="linear"
              >
                Training
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="counseling-about"
                smooth={true}
                offset={-120}
                duration={10}
                easing="linear"
              >
                About Us
              </ScrollLink>
            </li>
            <li id="navbar_button" onClick={toggleDonationPopup}>
              Donate
            </li>
          </ul>

          {showDonationPopup && (
            <motion.p
              id="donation-popup"
              initial={{
                opacity: 1,
                x: "-100vh",
              }}
              animate={{
                x: -100,
                opacity: 1,

                transition: { duration: 0.5 },
              }}
            >
              {data.map((item, index) => (
                <span key={index}>
                  <span id="close-popup" onClick={toggleDonationPopup}>
                    {item.x}
                  </span>
                  {item.text}
                </span>
              ))}
            </motion.p>
          )}
          {showBoxSearch && (
            <>
              <p id="donation-popup">
                <span id="close-popup" onClick={toggleSearchPopup}>
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
