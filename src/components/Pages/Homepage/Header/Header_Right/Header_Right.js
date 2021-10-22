import React from "react";

import styles from "../Header.module.css";

import Mechanic_Image_Header from "../../../../../assets/image/Mechanic_Image_Header.png";
import Circle from "../../../../bubbles/Circle/circle";
import Oval from "../../../../bubbles/Oval/Oval";
import Star from "../../../../bubbles/Star/Star";

function Header_Right() {
  return (
    <div>
      <div className={styles.bubble_1}>
        <Oval
          component={<Circle text1="24" text2="hr" color="#5CBA99" type={1} />}
          text="Quick service"
          color="linear-gradient(138.85deg, #FFFFFF -38.72%, #FFFFFF 153.95%)"
          bgColor="rgba(255, 255, 255, 0.43)"
          boxShadowColor="rgba(109, 108, 115, 0.12)"
          type={1}
          padding="15px 38px 15px 14px"
        />
      </div>
      <div className={styles.header_mechanic_image}>
        <img src={Mechanic_Image_Header} alt="Mechanic Working" />
      </div>
      <div className={styles.bubble_2}>
        <Oval
          component={
            <Star
              count={5}
              value={4.5}
              color="#D7D1C7"
              activeColor="#FFB648"
              isHalf
              size={32}
            />
          }
          text="4.5/5"
          text2="Rating"
          color="linear-gradient(138.85deg, #FFFFFF -38.72%, #FFFFFF 153.95%)"
          bgColor="rgba(255, 255, 255, 0.43)"
          boxShadowColor="rgba(109, 108, 115, 0.12)"
          type={2}
          padding="24px 38px 24px 32px"
        />
      </div>
    </div>
  );
}

export default Header_Right;
