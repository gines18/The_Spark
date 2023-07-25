import React from "react";
import "./Info.css";

function Info() {
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
            <button id="info_button_contact">Contact Us</button>
            <button id="info_button_about">About Us</button>
          </p>
        </div>

        <div>
          <img id="info_img" src="fireworks.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Info;
