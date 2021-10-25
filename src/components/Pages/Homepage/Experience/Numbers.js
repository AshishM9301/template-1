import React from "react";

import styles from "./Experience.module.css";

function Numbers({ number, text }) {
  return (
    <div>
      <div className={`h2 ${styles.numbers}`}>{number}</div>
      <div className={styles.title}>{text}</div>
    </div>
  );
}

export default Numbers;
