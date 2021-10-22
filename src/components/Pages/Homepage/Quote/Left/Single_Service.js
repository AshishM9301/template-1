import React from "react";

import Circle from "../../../../bubbles/Circle/circle";

import styles from "../Quote.module.css";

function Single_Service({ img, title, desc }) {
  return (
    <div className={styles.left_service}>
      <div className={styles.left_service_title}>
        <Circle type={2} color="var(--white)" imgsrc={img} size={48} />
        <div className={styles.left_service_title_name}>{title}</div>
      </div>
      <div className={styles.left_service_description}>{desc}</div>
    </div>
  );
}

export default Single_Service;
