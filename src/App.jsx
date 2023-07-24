import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import Quotes from "./components/Quotes";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Logo from "./components/Logo";
import Help from "./components/Help";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Quotes />
      <Gallery />
      <Blog />
      <Logo />
      <Help />
      <Numbers />
      <Footer />
    </>
  );
}

export default App;
