import React from "react";
import FooterTop from "../../footer/footer-top/Footer-top";
import Brands from "./Brands/Brands";
import CTA from "./CTA/CTA";
import Experience from "./Experience/Experience";
import FAQ from "./FAQ/FAQ";
import Header from "./Header/Header";
import styles from "./Homepage.module.css";
import Offer from "./Offer/Offer";
import ProcessSelection from "./ProcessSelection/Process_Selection";
import Quote from "./Quote/Quote";
import Testimonials from "./Testimonials/Testimonials";

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
      <div>
        <Brands />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
}

export default Homepage;
