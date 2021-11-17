import React from "react";

import styles from "./FAQ.module.css";
import FAQCards from "./FAQ_Cards";

function FAQ() {
  const FAQCardsData = [
    {
      id: 1,
      question: "How long should a car repair take?",
      answer:
        " I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      id: 2,
      question: "How do I schedule my car's appointment ?",
      answer:
        " I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      id: 3,
      question: "What are the repair services provided?",
      answer:
        " I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      id: 4,
      question: "How do I find auto body shops near me?",
      answer:
        " I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
    {
      id: 5,
      question: "Genuine spare parts during car repair?",
      answer:
        " I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet",
    },
  ];

  return (
    <div className={styles.background}>
      <div className={`body ${styles.container}`}>
        <div className={`h3 ${styles.title}`}>Frequently Asked Questions</div>

        <div className={styles.all_cards}>
          {FAQCardsData.map((cards) => (
            <FAQCards question={cards.question} answer={cards.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
