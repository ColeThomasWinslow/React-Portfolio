import React from "react";
import Github from "../../../icons/Github.svg";
import Linkedin from "../../../icons/Linkedin.svg";
import Resume from "../../../icons/ColeWinslowResume.pdf";

function MobileExternalLinks() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="MobileExternal">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/ColeThomasWinslow"
        >
          <img className="MobileIcon" src={Github} alt="github" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/cole-winslow/"
        >
          <img className="MobileIcon" src={Linkedin} alt="Linkedin" />
        </a>
      </div>
      <a
        className="Btn SmallBtn MobileBtn"
        rel="noreferrer"
        target="_blank"
        href={Resume}
      >
        Resume
      </a>
    </div>
  );
}

export default MobileExternalLinks;
