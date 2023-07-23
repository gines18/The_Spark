import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import Quotes from "./components/Quotes";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Quotes />
      <Gallery />
    </>
  );
}

export default App;
