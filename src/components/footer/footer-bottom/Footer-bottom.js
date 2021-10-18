import React from "react";
import Menus from "../../menus/Menus";

import logo from "../../../assets/image/Logo_white.svg";

import styles from "./FooterBottom.module.css";

function FooterBottom() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.middle}>
        <Menus white />
      </div>
      <div className={styles.right}>@ Copyright Finsweet 2021</div>
    </div>
  );
}

export default FooterBottom;
