import React from "react";
import { Link } from "react-router-dom";
import Email from "../icons/Email.svg";
import Logo from "../icons/Developer.svg";
function Conformation() {
  return (
    <div className="PageBox">
      <div className="NavBar Scrolled">
        <Link to="/" className="BackBtn">
          Go Back To Home Page
        </Link>
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
      <img className="PageIcon" src={Email} alt="Email" />
      <div className="TitleCont">
        <h2 className="Title">Your Message Has been Sent!</h2>
        <h2 className="Title Secondary">
          Im looking forward to talking with you.
        </h2>
      </div>
    </div>
  );
}

export default Conformation;
