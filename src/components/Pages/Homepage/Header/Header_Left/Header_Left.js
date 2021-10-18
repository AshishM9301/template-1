import React from "react";

import Clock_Icon from "../../../../../assets/image/Clock_Icon.svg";

import styles from "../Header.module.css";

function Header_Left() {
  return (
    <div>
      <div className={styles.left_container}>
        <div className={`h1 ${styles.left_title}`}>
          Get your vehicle service done online at one place
        </div>
        <div className={styles.left_button}>
          <div className="button-primary">Book a service</div>
        </div>
        <div className={styles.left_details}>
            <div className={styles.left_clock_icon}>
          <img src={Clock_Icon} alt="Clock Icon" /></div>
          <div className={styles.left_opening_details}>
              <div className={styles.left_opening_title}>
              We are open
              </div>
              <div className={styles.left_opening_time}>
              Monday to Friday 9:00 AM to 10:00 AM
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_Left;
