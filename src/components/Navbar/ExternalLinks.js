import React from "react";
import Github from "../../icons/Github.svg";
import Linkedin from "../../icons/Linkedin.svg";
import ResumeFILE from "../../icons/ColeWinslowResume.pdf";
import Download from "../../icons/download.svg";
import Open from "../../icons/Open.svg";

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
      <div to="resume" className="Btn SmallBtn tooltip ">
        Resume
        <div className="tooltiptext">
          <a href={ResumeFILE} download="ColeWinslowResume" className="Tag">
            <p>Download Resume</p> <img src={Download} alt="Download" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            type="application/pdf"
            href={ResumeFILE}
            className="Tag "
          >
            <p>Open Resume</p> <img src={Open} alt="Open" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExternalLinks;
