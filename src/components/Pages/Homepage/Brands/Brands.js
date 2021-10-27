import React from "react";

import styles from "./Brands.module.css";
import BrandsCard from "./Brands_Card";

import Brand_1 from "../../../../assets/image/brand_1.svg";
import Brand_2 from "../../../../assets/image/brand_2.svg";
import Brand_3 from "../../../../assets/image/brand_3.svg";
import Brand_4 from "../../../../assets/image/brand_4.svg";
import Brand_5 from "../../../../assets/image/brand_5.svg";

function Brands() {
  return (
    <div>
      <div className={`body ${styles.container}`}>
        <div className={`h3 ${styles.title}`}>Brands we Serve</div>
        <div className={styles.brands_container}>
          <BrandsCard img={Brand_5} />
          <BrandsCard img={Brand_4} />
          <BrandsCard img={Brand_3} />
          <BrandsCard img={Brand_2} />
          <BrandsCard img={Brand_1} />
          <BrandsCard img={Brand_5} />
          <BrandsCard img={Brand_4} />
          <BrandsCard img={Brand_3} />
          <BrandsCard img={Brand_2} />
          <BrandsCard img={Brand_1} />
        </div>
      </div>
    </div>
  );
}

export default Brands;
