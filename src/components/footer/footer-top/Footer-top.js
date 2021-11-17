import React from "react";

import styles from "./FooterTop.module.css";

function FooterTop() {
  return (
    <div>
      <div className={styles.background}>
        <div className={`body ${styles.container}`}>
          <div className={styles.left}>
            <div className={`h3 ${styles.title}`}>
              Get in touch with us for your service
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.block}>
              <div className={styles.block_title}>Help line Number</div>
              <div className={styles.block_no}>1800 265 24 52</div>
            </div>
            <div className={styles.block}>
              <div className={styles.block_title}>Address</div>
              <div className={styles.block_no}>
                NH 234 Public Square San Francisco 65368
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.block_title}>We are open</div>
              <div className={styles.block_no}>
                Monday to Friday 9:00 AM to  10:00  AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
