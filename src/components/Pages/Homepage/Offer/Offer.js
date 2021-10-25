import React from "react";

import arrow from "../../../../assets/image/Arrow.svg";

import styles from "./Offer.module.css";
import OffersCard from "./Offers_card";

function Offer() {
  return (
    <div className={styles.background}>
      <div className={`${styles.container}`}>
        <div className={styles.titles}>
          <div>What we Offer</div>
          <div className={styles.big_title}>
            We offer full service auto repair & maintenance
          </div>
        </div>
        <div className={styles.offers}>
          <OffersCard img="DiagnosticsIcon" text="Diagnostics" />
          <OffersCard img="EngineRepairIcon" text="Engine Repair" />
          <OffersCard img="WheelRepairIcon" text="Wheel Repair" />
          <OffersCard img="OilFilterIcon" text="Oil Filter" />
          <OffersCard img="BodyWorkIcon" text="Body Work" />
          <OffersCard img="BatteriesIcon" text="Batteries" />
          <OffersCard img="InsuranceClaimIcon" text="Insurance Claim" />
          <OffersCard img="CustomerServiceIcon" text="Custom Service" />
        </div>
        <div className={styles.learn_button}>
          <div>Learn about services</div>
          <div className={styles.arrow}>
            <img src={arrow} alt="arrow button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
