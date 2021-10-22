import React from "react";
import Header from "./Header/Header";
import styles from "./Homepage.module.css";
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
    </div>
  );
}

export default Homepage;
