import "./App.css";
import React, { useRef } from "react";
import Home from "./componentes/Home";
import Projects from "./componentes/Projects/Projects";
import Contact from "./componentes/Contact";
import AboutUs from "./componentes/AboutUs";
import OurTeam from "./componentes/OurTeam";
import Header from "./componentes/Header";

function App() {
  const contactRef = useRef(null);
  return (
    <>
      <Header contactRef={contactRef} />
      <Home />
      <AboutUs />
      <Projects />
      <OurTeam />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;
