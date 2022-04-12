import React from "react";
import Github from "../../icons/Github.svg";
import Linkedin from "../../icons/Linkedin.svg";

import { Link } from "react-router-dom";

function ExternalLinks() {
  return (
    <div className="LinkCont Desktop">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/ColeThomasWinslow"
      >
        <img className="Icon" src={Github} alt="github" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/cole-winslow/"
      >
        <img className="Icon" src={Linkedin} alt="Linkedin" />
      </a>
      <Link to="resume" className="Btn SmallBtn">
        Resume
      </Link>
    </div>
  );
}

export default ExternalLinks;
