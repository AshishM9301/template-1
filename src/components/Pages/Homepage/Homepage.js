import React from "react";
import Header from "./Header/Header";
import styles from './Homepage.module.css'

function Homepage() {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default Homepage;
