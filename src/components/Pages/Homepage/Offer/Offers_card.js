import React, { useState } from "react";
import DiagnosticsIcon from "../../../Icons/DiagnosticsIcon";
import EngineRepairIcon from "../../../Icons/EngineRepairIcon";
import WheelRepairIcon from "../../../Icons/WheelRepairIcon";
import OilFilterIcon from "../../../Icons/OilFilterIcon";
import BodyWorkIcon from "../../../Icons/BodyWorkIcon";
import BatteriesIcon from "../../../Icons/BatteriesIcon";
import InsuranceClaimIcon from "../../../Icons/InsuranceClaimIcon";
import CustomerServiceIcon from "../../../Icons/CustomerServiceIcon";

import styles from "./Offer.module.css";

function Offers_card({ img, text }) {
  const [Hover, setHover] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHover(!Hover)}
      onMouseLeave={() => setHover(!Hover)}
    >
      <div>
        {img === "DiagnosticsIcon" ? (
          <DiagnosticsIcon hover={Hover} color="var(--white)" />
        ) : img === "EngineRepairIcon" ? (
          <EngineRepairIcon hover={Hover} color="var(--white)" />
        ) : img === "WheelRepairIcon" ? (
          <WheelRepairIcon hover={Hover} color="var(--white)" />
        ) : img === "OilFilterIcon" ? (
          <OilFilterIcon hover={Hover} color="var(--white)" />
        ) : img === "BodyWorkIcon" ? (
          <BodyWorkIcon hover={Hover} color="var(--white)" />
        ) : img === "BatteriesIcon" ? (
          <BatteriesIcon hover={Hover} color="var(--white)" />
        ) : img === "InsuranceClaimIcon" ? (
          <InsuranceClaimIcon hover={Hover} color="var(--white)" />
        ) : img === "CustomerServiceIcon" ? (
          <CustomerServiceIcon hover={Hover} color="var(--white)" />
        ) : null}
      </div>
      <div>{text}</div>
    </div>
  );
}

export default Offers_card;
