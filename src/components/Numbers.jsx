import React from "react";
import "./Numbers.css";

let data_numbers = [
  {
    number: "13,568",
    text: "HELPLINE CALLS RECIEVED",
  },
  {
    number: "85%",
    text: "WOULD RECOMMEND THE HELPLINE",
  },
  {
    number: "12,352",
    text: "COUNSELLING SESSIONS OFFERED",
  },
  {
    number: "2,166",
    text: "CLIENTS",
  },
];

function Numbers() {
  return (
    <>
      <div id="numbers_container">
        {data_numbers.map((item) => (
          <div id="numbers_data">
            <h1>{item.number}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Numbers;
