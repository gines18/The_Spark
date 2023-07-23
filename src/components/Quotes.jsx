import React from "react";
import './Quotes.css'
let data_quotes = [
  {
    img: "./quote.png",
    quote:
      "Counselling was invaluable and helped us through a very difficult time in our relationship. We are a much happier couple now.",
  },
];

let data_quotes_second = [
  {
    img: "./quote.png",
    quote:
      "At a time in my life when I really needed some help and guidance, I absolutely got that and I felt very supported too.",
  },
];

function Quotes() {
  return(
  <>

  <div id="container_quotes">
  <div id="quotes_box">
    <img id="quote_img" src="./quote.png" alt="" />
        <p>Counselling was invaluable and helped us through a very difficult time in our relationship. We are a much happier couple now.</p>
    </div>

    <div id="quotes_box">
        <p>"At a time in my life when I really needed some help and guidance, I absolutely got that and I felt very supported too."</p>
        <img  id="quote_img" src="./quote.png" alt="" />
    </div>

    </div>
   
    </>
    )
}

export default Quotes;
