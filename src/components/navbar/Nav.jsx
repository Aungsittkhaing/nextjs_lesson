import React from "react";
import Links from "./links/Links";
import styles from "./nav.module.css";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>My Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
