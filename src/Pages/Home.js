import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Navbar/NavBar";
import Projects from "../components/Projects/Projects";
import Tech from "../components/Tech/Tech";
function Home() {
  return (
    <>
      <NavBar />
      <div className="Content">
        <Hero />
        <Projects />
        <Tech />
        <Contact />
      </div>
    </>
  );
}

export default Home;
