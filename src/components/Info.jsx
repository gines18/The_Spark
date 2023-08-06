import React, { useState } from "react";
import "./Info.css";
import { motion } from "framer-motion";

function Info() {
  let Call = () => {
    window.location.href = `tel:${4488020088}`;
  };

  const [showBox, setClicked] = useState(false);

  function donate() {
    setClicked(!showBox);
  }

  return (
    <>
      <div id="info_container">
        <div>
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
                  scale: 0.1
                }}

          whileInView={{
          scale: 1,
          transition: {
            duration: 3,
          },
        }}
       
          />
        
      </div>
    </>
  );
}

export default Info;
