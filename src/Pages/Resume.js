import React from "react";
import { Link } from "react-router-dom";
import ResumeFILE from "../icons/ColeWinslowResume.pdf";
import DownloadImg from "../icons/download.svg";
import Logo from "../icons/Developer.svg";

function Resume() {
  return (
    <div className="PageBox">
      <div className="NavBar Scrolled">
        <Link to="/" className="BackBtn">
          Go Back To Home Page
        </Link>
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
      <img className="PageIcon" src={DownloadImg} alt="DownloadImg" />
      <div className="TitleCont">
        <h2 className="Title">Download or View Resume</h2>
        <h2 className="Title Secondary">Click on one of the buttons below</h2>
      </div>

      <div className="CTAHolder">
        <a href={ResumeFILE} download="ColeWinslowResume" className="Btn CTA">
          Download Resume
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          type="application/pdf"
          href={ResumeFILE}
          className="Btn CTA"
        >
          Open Resume in PDF Viewer
        </a>
      </div>
    </div>
  );
}

export default Resume;
