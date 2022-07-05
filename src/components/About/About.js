import React from "react";
import Profile from "../../icons/ProfilePhoto.png";
function About() {
  return (
    <div name="about" className="AboutCont">
      <div className="profileCont">
        <img
          width="100px"
          className="profile"
          src={Profile}
          alt="colewinslow"
        />
      </div>
      <div className="aboutText">
        <p className="SubTitle">Learn A little more</p>
        <h2 className="Title"> About me</h2>

        <p className="Description aboutWord">
          I'm a software engineer focused on coding web applications that are
          complex, scalable, and highly performant. Most of my apps are
          developed with the M.E.R.N stack ( MongoDb, Express, React, Node ) but
          I am well versed in many different technologies and tech stacks.
        </p>
      </div>{" "}
    </div>
  );
}

export default About;
