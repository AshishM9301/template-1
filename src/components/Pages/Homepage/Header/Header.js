import React from "react";

import styles from "./Header.module.css";
import HeaderLeft from "./Header_Left/Header_Left";
import HeaderRight from "./Header_Right/Header_Right";

function Header() {
  return (
    <div>
      <div className={`body ${styles.container}`}>
        <div className={styles.left}>
            <HeaderLeft/>
        </div>
        <div className={styles.right}>
          <HeaderRight />
        </div>
      </div>
    </div>
  );
}

export default Header;
