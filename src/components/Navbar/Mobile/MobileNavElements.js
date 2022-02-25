import React, { useState } from "react";
import { Link } from "react-scroll";
import Folder from "../../../icons/Folder.svg";
import Gear from "../../../icons/Gear.svg";
import Email from "../../../icons/Email.svg";
const MobileNavElements = ({ setOpen }) => {
  const handelClose = () => {
    setOpen(false);
  };

  return (
    <div className="MobileContainer">
      <Link
        className="MobileNavElm"
        to="projects"
        spy={true}
        offset={-95}
        smooth={true}
        duration={400}
        onClick={handelClose}
      >
        <img className="MobileIcon" src={Folder} alt="Projects" />
      </Link>
      <Link
        className="MobileNavElm"
        to="tech"
        spy={true}
        offset={-95}
        smooth={true}
        duration={400}
        onClick={handelClose}
      >
        <img className="MobileIcon" src={Gear} alt="Tech" />
      </Link>
      <Link
        className="MobileNavElm"
        to="contact"
        spy={true}
        smooth={true}
        duration={400}
        onClick={handelClose}
      >
        <img className="MobileIcon" src={Email} alt="Email" />
      </Link>
    </div>
  );
};

export default MobileNavElements;
