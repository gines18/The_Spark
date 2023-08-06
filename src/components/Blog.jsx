import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Blog.css";
import { motion } from "framer-motion";

let data_blog = [
  {
    header_blog: "WANT TO LEARN MORE",
    text_blog: "From our blog",
  },
];

let data_blog_card = [
  {
    img: "./brother.jpeg",
    header: "National Siblings Day: A Reminder to Reconnect",
    text: "National Siblings Day, on April 10th, is a special day dedicated to honouring the unique bond that exists between brothers and sisters.",
    link: "https://www.google.com",
    date: "3 April 2023",
  },
  {
    img: "./valentine.jpeg",
    header: "An Unconventional Valentine’s Gift",
    text: "Although Valentine’s Day provides an opportunity for many couples to celebrate their love and commitment to one another, for others it can be a stark reminder that being in a relationship can be tough.",
    link: "https://www.google.com",
    date: "14 February 2023",
  },
  {
    img: "./exam.jpeg",
    header: "3 Exam Myths Busted",
    text: "Exams are on the horizon for young people up and down the country. So we decided it was time to bust a few exam myths that can create unnecessary stress and anxiety before exams.",
    link: "https://www.google.com",
    date: "31 March 2022",
  },
];

function Blog() {
  const [showBox, setClicked] = useState(false);

  function donate() {
    setClicked(!showBox);
  }

  return (
    <>
      {data_blog.map((item, index) => (
        <div key={index} id="gallery_container_header">
          <p>{item.header_blog}</p>
          <h1>{item.text_blog}</h1>
        </div>
      ))}

      <motion.div
        id="services_container_blog"
        
        initial={{
          opacity: 0.3,
        }}
        
        whileInView={{
          opacity: 1,

          transition: {
            duration: 4,
          },
        }}
      >
        {data_blog_card.map((item, index) => (
          <Card
            id="blog_card"
            key={index}
            sx={{ maxWidth: 345, minHeight: 410 }}
          >
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
                  {item.text}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <a id="blog_link" href={item.link} target="_blank">
                    Read more
                  </a>
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  {item.date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </motion.div>

      <div id="services_container_header_bottom">
        <button id="info_button_services" onClick={donate}>
          View all posts
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
      </div>
    </>
  );
}

export default Blog;
