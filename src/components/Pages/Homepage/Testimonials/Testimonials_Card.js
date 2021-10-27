import React from "react";

import styles from "./Testimonials.module.css";

function Testimonials_Card({ img, name }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={img} alt="testimonial" />
        </div>
        <div className={styles.info_details}>
          <div className={styles.testimonial_name}>{name}</div>
          <div className={styles.testimonial_address}>New Work</div>
        </div>
      </div>
      <div className={styles.testimonial}>
        I have got my car repaired at Finsweet many times before, they are good
        at what they do. Not only did they repair my car in a short
        comprehensive look on all the working
      </div>
    </div>
  );
}

export default Testimonials_Card;
