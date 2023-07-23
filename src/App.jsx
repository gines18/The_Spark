import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Services />
    </>
  );
}

export default App;
