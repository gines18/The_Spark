import React, { useState } from "react";
import "./Info.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Info() {
  let Call = () => {
    window.location.href = `tel:${4488020088}`;
  };

  const [showBox, setClicked] = useState(false);

  function donate() {
    setClicked(!showBox);
  }

  const [ref, inView] = useInView({
    triggerOnce: true, // This ensures that the animation happens only once when the element comes into view
  });

  return (
    <>
      <div id="info_container">
        <div id="counseling-about">
          <h1>Igniting Change</h1>
          <p>
            The Spark provides counselling and mental health support services
            for individuals, <br /> couples, families, children and young people
            in Scotland.
          </p>
          <p>
            This includes a free and confidential counselling helpline on
            <strong> 0808 802 0088.</strong>
            <br />
            <button id="info_button_contact" onClick={Call}>
              Contact Us
            </button>
            <button id="info_button_about" onClick={donate}>
              About Us
            </button>
            {showBox && (
              <>
                <div>
                  <p id="popup_donation">
                    <span id="navbar_donate_button" onClick={donate}>
                      X
                    </span>
                    <p>This section is under maintenance!</p>
                  </p>
                </div>
              </>
            )}
          </p>
        </div>

        <motion.img
          id="info_img"
          src="fireworks.png"
          alt="spark img"
          initial={{
            scale: 0.5,
          }}
          
      
            whileInView={{
              scale: inView ? 0.1 : 1,
            
            }}
  
            transition={{
              duration: 3,
            }}
        />
      </div>
    </>
  );
}

export default Info;
