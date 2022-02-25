import React from "react";
import Check from "../../icons/Checkmark.svg";
function Footer() {
  return (
    <div className="Footer">
      <p className="FootNote">
        Actively Looking For Work
        <img className="Check" src={Check} alt="Check Mark" />
      </p>
      <p className="Copy">© 2022 | Made by Cole Winslow with React.JS</p>
    </div>
  );
}

export default Footer;
