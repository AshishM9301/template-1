import React from "react";
import Left from "./Left/Left";

import styles from "./Quote.module.css";
import Right from "./Right/Right";

function Quote() {
  return (
    <div className={styles.background}>
      <div className={`body ${styles.container}`}>
        <div className={styles.left}>
          <Left />
        </div>
        <div className={styles.right}>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Quote;
