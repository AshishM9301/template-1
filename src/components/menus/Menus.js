import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Menus.module.css";

function Menus({ white, black = true }) {
  console.log(white, black);

  return (
    <div className={styles.nav_main}>
      <Link
        to="/"
        className={white ? styles.nav_styles_white : styles.nav_styles}
      >
        Home
      </Link>
      <div className={white ? styles.nav_styles_white : styles.nav_styles}>
        About us
      </div>
      <Link
        to="/services"
        className={white ? styles.nav_styles_white : styles.nav_styles}
      >
        Service
      </Link>
      <div className={white ? styles.nav_styles_white : styles.nav_styles}>
        Blog
      </div>
      <div className={white ? styles.nav_styles_white : styles.nav_styles}>
        Contact
      </div>
    </div>
  );
}

Menus.prototype = {
  white: PropType.bool.isRequired,
  black: PropType.bool.isRequired,
};

export default Menus;
