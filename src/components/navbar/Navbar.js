import React from "react";
import styles from "./Navbar.module.css";

import assistance_logo from "../../assets/image/AssistanceIcon.svg";
import logo from "../../assets/image/Logo.svg";

import Menus from "../menus/Menus";

function Navbar() {
  return (
    <div className={`body ${styles.container}`}>
      <div className={styles.left}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.right}>
        <div className={styles.nav_main}>
          <Menus />
        </div>
        <div className={styles.contact}>
          <div className={styles.contact_logo}>
            <img src={assistance_logo} alt="contact logo" />
          </div>
          <div className={styles.contact_details}>
            <div>Road Assistance</div>
            <div>1800 265 24 52</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
