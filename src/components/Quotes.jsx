import React from "react";
import "./Quotes.css";

let data_quotes = [
  {
    img: "./quote.png",
    quote:
      "Counselling was invaluable and helped us through a very difficult time in our relationship. We are a much happier couple now.",
  },
  {
    img: "./quote.png",
    quote:
      "At a time in my life when I really needed some help and guidance, I absolutely got that and I felt very supported too.",
  },
];

function Quotes() {
  return (
    <>
      <div id="container_quotes">
        {data_quotes.map((item, index) => (
          <div key={index} id="quotes_box">
            <img id="quote_img" src={item.img} alt="" />
            <p>{item.quote}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Quotes;
