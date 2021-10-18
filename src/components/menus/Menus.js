import React from "react";
import PropType from "prop-types";

import styles from "./Menus.module.css";

function Menus({ white, black=true }) {
  console.log(white, black);

  return (
    <div className={styles.nav_main}>
      <div className={white? styles.nav_styles_white: styles.nav_styles}>Home</div>
      <div className={white? styles.nav_styles_white: styles.nav_styles}>About us</div>
      <div className={white? styles.nav_styles_white: styles.nav_styles}>Service</div>
      <div className={white? styles.nav_styles_white: styles.nav_styles}>Blog</div>
      <div className={white? styles.nav_styles_white: styles.nav_styles}>Contact</div>
    </div>
  );
}

Menus.prototype = {
  white: PropType.bool.isRequired,
  black: PropType.bool.isRequired,
};



export default Menus;
