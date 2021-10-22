import React from "react";

import Circle from "../../../../bubbles/Circle/circle";

import Ellipse from "../../../../../assets/image/Ellipse.svg";

import styles from "../ProcessSelection.module.css";

function Process_Single({ no, title, desc, end }) {
  return (
    <div>
      <div className={styles.right_process_title_container}>
        <Circle
          imgsrc={Ellipse}
          type={3}
          color="var(--secondary)"
          text1={no}
          size="4.5rem"
        />
        <div className={styles.right_process_title}>{title}</div>
      </div>
      <div className={styles.right_process_details_container}>
        {end ? <div></div> : <div className={styles.right_dashed}></div>}
        <div className={styles.right_process_details}>{desc}</div>
      </div>
    </div>
  );
}

export default Process_Single;
