import React, { useEffect, useState } from "react";
import ExternalLinks from "./ExternalLinks";
import MobileToggle from "./Mobile/MobileToggle";
import NavElements from "./NavElements";

function NavBar() {
  const [ScrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div className={`NavBar ${ScrollNav && "Scrolled"} `} ScrollNav={ScrollNav}>
      <NavElements />
      <ExternalLinks />
      <MobileToggle />
    </div>
  );
}

export default NavBar;
