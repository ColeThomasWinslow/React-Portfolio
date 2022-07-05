import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
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
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
