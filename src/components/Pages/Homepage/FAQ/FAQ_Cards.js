import React, { useState } from "react";

import styles from "./FAQ.module.css";

function FAQ_Cards({ question, answer }) {
  const [ShowDesc, setShowDesc] = useState(false);
  return (
    <div className={styles.cards_container}>
      <div className={styles.cards_title_container}>
        <div className={styles.cards_title}>{question}</div>
        <div
          className={styles.card_show}
          onClick={() => setShowDesc(!ShowDesc)}
        >
          {ShowDesc ? <div>+</div> : <div>-</div>}
        </div>
      </div>{" "}
      {ShowDesc ? (
        <div className={styles.cards_desc}>{answer}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FAQ_Cards;
