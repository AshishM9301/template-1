import React from "react";
import ProcessLeft from "./Left/Process_Left";

import styles from "./ProcessSelection.module.css";
import Right from "./Right/Right";

function Process_Selection() {
  return (
    <div>
      <div className={`body ${styles.container}`}>
        <div className={styles.left}>
          <ProcessLeft />
        </div>
        <div className={styles.right}>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Process_Selection;
