import React from "react";

import styles from "../Quote.module.css";

function Right() {
  return (
    <div>
      <div className={styles.right_title}>
        <div className="h3">Get a quote for the car service</div>
      </div>
      <div className={styles.user_quote}>
        <div className={styles.container_input_for_user}>
          <input
            className={styles.input_for_user}
            placeholder="Enter your location"
          />
        </div>
        <div className={styles.container_input_for_user}>
          <input
            className={styles.input_for_user}
            placeholder="Enter your location"
          />
        </div>
        <div className={styles.container_input_for_user}>
          <input
            className={styles.input_for_user}
            placeholder="Enter your location"
          />
        </div>
        <div className={styles.container_input_for_user}>
          <input
            className={styles.input_for_user}
            placeholder="Your phone number"
          />
        </div>
      </div>
      <div className={styles.button_container}>
        <div className="button-primary">Get your quote</div>
      </div>
    </div>
  );
}

export default Right;
