import React, { useState } from "react";
import Menu from "../../../icons/Menu.svg";
import Logo from "../../../icons/Developer.svg";
import MobileExternalLinks from "./MobileExternalLinks";
import MobileNavElements from "./MobileNavElements";
import { Link } from "react-scroll";
function MobileToggle() {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div className="Mobile">
      <div className="MobileNavBar">
        <Link to="home">
          <span>
            <img className="Logo" src={Logo} alt="Logo" />
          </span>
        </Link>
        <div
          onClick={() => {
            setOpenMenu(!OpenMenu);
          }}
        >
          <img src={Menu} alt="menu" />
        </div>
      </div>
      {OpenMenu && (
        <div className="Menu">
          <MobileNavElements setOpen={setOpenMenu} />
          <MobileExternalLinks />
        </div>
      )}
    </div>
  );
}

export default MobileToggle;
