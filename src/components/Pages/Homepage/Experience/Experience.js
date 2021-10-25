import React from "react";

import styles from "./Experience.module.css";
import Numbers from "./Numbers";

function Experience() {
  return (
    <div className={styles.background}>
      <div className={`body ${styles.container}`}>
        <div>
          <Numbers number="12+" text="Professional" />
        </div>
        <div>
          <Numbers number="10+" text="Years Experience" />
        </div>
        <div>
          <Numbers number="12K" text="Service Closed" />
        </div>
        <div>
          <Numbers number="100%" text="Customer Satisfaction" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
