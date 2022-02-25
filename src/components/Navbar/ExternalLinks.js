import React from "react";
import Github from "../../icons/Github.svg";
import Linkedin from "../../icons/Linkedin.svg";
import Resume from "../../icons/ColeWinslowResume.pdf";
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
      <a
        className="Btn SmallBtn"
        rel="noreferrer"
        target="_blank"
        href={Resume}
      >
        Resume
      </a>
    </div>
  );
}

export default ExternalLinks;
