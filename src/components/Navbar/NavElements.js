import React from "react";
import Gear from "../../icons/Gear.svg";
import Folder from "../../icons/Folder.svg";
import Developer from "../../icons/Developer.svg";
import Email from "../../icons/Email.svg";
import { Link } from "react-scroll";
function NavElements() {
  return (
    <div className="NavElmContainer Desktop">
      <Link
        className="NavElm"
        to="home"
        spy={true}
        smooth={true}
        duration={200}
      >
        <span>
          <img className="Logo" src={Developer} alt="Logo" />
        </span>
      </Link>
      <Link
        className="NavElm"
        to="projects"
        spy={true}
        offset={-95}
        smooth={true}
        duration={400}
      >
        <span>
          <img className="ElmImg" src={Folder} alt="Projects" />
          Projects
        </span>
      </Link>
      <Link
        className="NavElm"
        to="tech"
        spy={true}
        offset={-95}
        smooth={true}
        duration={400}
      >
        <span>
          <img className="ElmImg" src={Gear} alt="Tech" />
          Tech
        </span>
      </Link>
      <Link
        className="NavElm"
        to="contact"
        spy={true}
        smooth={true}
        duration={400}
      >
        <span>
          <img className="ElmImg" src={Email} alt="Email" />
          Contact
        </span>
      </Link>
    </div>
  );
}

export default NavElements;
