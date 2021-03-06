import React, { useState } from "react";
import { Link } from "react-scroll";

function Hero() {
  const [Scroll1, setScroll1] = useState("");
  const [Scroll2, setScroll2] = useState("");
  window.onscroll = function rotateGear() {
    setScroll1("rotate(" + (window.scrollY * 6.5) / 18 + "deg)");
    setScroll2("rotate(-" + (window.scrollY * 6.5) / 18 + "deg)");
  };

  return (
    <div className="HeroContainer">
      <div className="Hero" name="home">
        <p className="SubTitle">Hi, my name is</p>
        <h2 className="Title">Cole Winslow.</h2>
        <h2 className="Title Secondary">I build things for the web</h2>

        <Link
          style={{
            textAlign: "center",
            maxWidth: "200px",
            margin: "0px",
            marginTop: "25px",
          }}
          to="contact"
          spy={true}
          smooth={true}
          duration={400}
          className="Btn CTA"
        >
          Contact Me
        </Link>
        <div className="container gears">
          <div
            style={{ transform: Scroll1 }}
            id="gear1"
            className="gear gear1"
          ></div>
          <div style={{ transform: Scroll2 }} className="gear gear2"></div>
          <div style={{ transform: Scroll1 }} className="gear gear3"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
