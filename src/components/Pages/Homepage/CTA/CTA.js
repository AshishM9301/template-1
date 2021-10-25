import React from "react";

import styles from "./CTA.module.css";

import CarRepair from "../../../../assets/image/Car_Repair.png";
import Engine from "../../../../assets/image/Engine.png";

function CTA() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.CarRepair}>
          <img src={CarRepair} alt="Car Repair" />
        </div>
        <div className={styles.Engine}>
          <img src={Engine} alt="Engine" />
        </div>
        <div className={`body ${styles.text}`}>
          <div className={`h3 ${styles.h3}`}>
            Get in touch with us for your service related query
          </div>
          <div className={styles.contact_button}>
            <div className="button-secondary">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
