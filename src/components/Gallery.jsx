import React from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

let data_gallery = [
  {
    header: "TRAINING THE NEXT GENERATION OF COUNSELLORS",
    text: "Our Courses & Training",
  },
];

function Gallery() {
    const [ref, inView] = useInView({
   
  });
  return (
    <> 
    <div id="counseling-training">
      {data_gallery.map((item, index) => (
        <div key={index} id="gallery_container_header">
          <p>{item.header}</p>
          <h1>{item.text}</h1>
        </div>
      ))}

      <motion.div
        id="gallery_container"
        initial={{
          scale: 0.5,
        }}
        
        viewport={{ once: true }}
          whileInView={{
            scale: inView ? 0.1 : 1,
          
          }}

          transition={{
            duration: 2,
          }}
      >
        <div id="img1">
          <span id="grid_description_img">Counceling Theory</span>
        </div>
        <div id="img2">
          <p>Retail Councelling</p>
        </div>
        <div id="img3">
          <p>HND Councelling</p>
        </div>
        <div id="img4">
          <p>HNC Councelling</p>
        </div>
        <div id="img5">
          <p>COSCA Certificate</p>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default Gallery;
