import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Services.css";

import {useState} from 'react'

let data = [
  {
    img: "./img1.jpeg",
    header: "Counselling for Individuals",
    info: "Explore your thoughts, feelings, and behaviors in a safe and confidential environment with individual counselling.",
    link: "Learn more",
  },
  {
    img: "./img2.jpeg",
    header: "Counselling for Couples",
    info: "Dedicated support for couples to address challenges, improve communication, and nurture a stronger, more fulfilling relationship.",
    link: "Learn more",
  },
  {
    img: "./img3.jpeg",
    header: "Counselling for Children",
    info: "Counseling provides a safe space for children and young people to express themselves, explore their emotions, and develop coping strategies.",
    link: "Learn more",
  },
  {
    img: "./img4.jpeg",
    header: "Counselling for Parents",
    info: "Family counselling can address a wide range of issues including relationship problems, communication breakdowns, and behavioural difficulties.",
    link: "Learn more",
  },
];

function Services() {

  const [showDivBox, setShowDivBox] = useState(false);
  const handleButtonClick = () => {
    setShowDivBox(!showDivBox);
  };


  return (
    <>
      <div id="services_container_header_top">
        <h1>Our Counselling Services</h1>
        <p>You’re in safe hands.</p>
        <p>We’ve been providing counselling and support for over 55 years.</p>
      </div>
      <div id="services_container">
        {data.map((item) => (
          <Card sx={{ maxWidth: 345, minHeight: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.info}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {item.link}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div id="services_container_header_bottom">
        <p>Looking for something else?</p>
        <button id="info_button_services"  onClick={handleButtonClick}>
          Contact Us
        </button>
      </div>

      {showDivBox && 
      
      <div className="popup">
       <p id="services_button" onClick={handleButtonClick}>x</p>
        <p>  This includes a free and confidential counselling helpline on 0808 802 0088.</p>
        
        </div>}
    </>
  );
}

export default Services;


