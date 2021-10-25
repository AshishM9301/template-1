import React from "react";
import CTA from "./CTA/CTA";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import styles from "./Homepage.module.css";
import Offer from "./Offer/Offer";
import ProcessSelection from "./ProcessSelection/Process_Selection";
import Quote from "./Quote/Quote";

function Homepage() {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div>
        <Quote />
      </div>
      <div>
        <ProcessSelection />
      </div>
      <div>
        <Offer />
      </div>
      <div>
        <CTA />
      </div>
      <div>
        <Experience />
      </div>
    </div>
  );
}

export default Homepage;
