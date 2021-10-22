import React from "react";

import styles from "../ProcessSelection.module.css";
import ProcessSingle from "./Process_Single";

function Right() {
  return (
    <div>
      <div className={styles.right_process}>
        <ProcessSingle
          no="01"
          title="Get a Quote"
          desc="Through True Rich Attended does no end it his mother since real had half every."
        />
        <ProcessSingle
          no="02"
          title="Book an Appointment"
          desc="Through True Rich Attended does no end it his mother since real had half every."
        />
        <ProcessSingle
          no="03"
          title="Get your Service Done"
          desc="Through True Rich Attended does no end it his mother since real had half every."
          end
        />
      </div>
    </div>
  );
}

export default Right;
