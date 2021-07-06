import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <React.Fragment>
      <div className={styles.nav}>
        <h3 className={styles.logo}>BORED.</h3>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
