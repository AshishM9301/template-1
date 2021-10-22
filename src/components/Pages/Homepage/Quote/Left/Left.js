import React from "react";

import styles from "../Quote.module.css";
import SingleService from "./Single_Service";

import Mechanic_Logo from "../../../../../assets/image/Mechanic_Logo.png";
import Service_Logo from "../../../../../assets/image/Service_Logo.png";
import Money_Logo from "../../../../../assets/image/Money_Logo.png";
import arrow from "../../../../../assets/image/Arrow.svg";

function Left() {
  return (
    <div>
      <div className={styles.left_title}>
        <div className="h2">We are taking car servicing seriously</div>
      </div>

      <div className={styles.left_services_details}>
        <SingleService
          title="Convenient service"
          desc="Through True Rich Attended does no end it his mother since real had half every him."
          img={Service_Logo}
        />
        <SingleService
          title="Expert mechanics"
          desc="Through True Rich Attended does no end it his mother since real had half every him."
          img={Mechanic_Logo}
        />
        <SingleService
          title="Transparent pricing"
          desc="Through True Rich Attended does no end it his mother since real had half every him."
          img={Money_Logo}
        />
      </div>
      <div className={styles.left_know_button}>
        <div className="h6">Know more about us</div>
        <div>
          <img src={arrow} alt="arrow button" />
        </div>
      </div>
    </div>
  );
}

export default Left;
