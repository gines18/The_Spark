import React from "react";
import "./Gallery.css";

let data_gallery = [
  {
    header: "TRAINING THE NEXT GENERATION OF COUNSELLORS",
    text: "Our Courses & Training",
  },
];

function Gallery() {
  return (
    <>
      {data_gallery.map((item) => (
        <div id="gallery_container_header">
          <p>{item.header}</p>
          <h1>{item.text}</h1>
        </div>
      ))}

      <div id="gallery_container">
        <div id="img1">
          <span id="grid_description_img">Gallery</span>
        </div>
        <div id="img2">
          <p>Gallery</p>
        </div>
        <div id="img3">
          <p>Gallery</p>
        </div>
        <div id="img4">
          <p>Gallery</p>
        </div>
        <div id="img5">
          <p>Gallery</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
