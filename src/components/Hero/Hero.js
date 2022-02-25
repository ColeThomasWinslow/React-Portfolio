import React from "react";

function Hero() {
  return (
    <div className="Hero" name="home">
      <p className="SubTitle">Hi, my name is</p>
      <h2 className="Title">Cole Winslow.</h2>
      <h2 className="Title Secondary">I build things for the web</h2>
      <p className="Description">
        I'm a software engineer focused on coding web applications that are
        complex, scalable, and highly performant.
      </p>
      <button className="Btn CTA">Contact Me</button>
    </div>
  );
}

export default Hero;
