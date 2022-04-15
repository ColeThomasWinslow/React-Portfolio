import React from "react";
import Check from "../../icons/Checkmark.svg";
import Email from "../../icons/DirectEmail.svg";
import Phone from "../../icons/Phone.svg";
function Footer() {
  return (
    <div className="Footer">
      <div className="FootNote">
        <div className="ContactIcons">
          <a href="tel:630-802-0888">
            <img src={Phone} alt="Phone" width="14px" />
            <span>630-802-0888</span>
          </a>
          <a href="mailto:coleWinslow174@gmail.com">
            <img src={Email} alt="Email" width="18px" />
            <span> colewinslow174@gmail.com</span>
          </a>
        </div>
        <p className="Copy">© 2022 | Made by Cole Winslow with React.JS</p>
        <div className="ActiveCont">
          <p className="Looking">Actively Looking For Work </p>
          <img className="Check" src={Check} alt="Check Mark" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
