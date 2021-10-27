import React, { useEffect, useState } from "react";

import styles from "./Testimonials.module.css";
import TestimonialsCard from "./Testimonials_Card";

function Testimonials() {
  const [CardsArr, setCardsArr] = useState([[]]);
  const [ShowingNo] = useState(1);

  const cards = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1634780646019-28757f7e11d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      name: "Smith Johnson",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 3,
      img: "h2",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 4,
      img: "h3",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 5,
      img: "h4",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 6,
      img: "h5",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 7,
      img: "h6",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
  ];

  useEffect(() => {
    data();
  });

  const data = () => {
    console.log(cards.length);
    let a = [];
    let b = [];

    let no = 0;

    for (let i = 0; i < cards.length / 2; i++) {
      for (let j = 0; j < 2; j++) {
        a[j] = cards[no];
        no++;
      }

      b = [...b, [...a]];
    }

    setCardsArr(b);

    console.log(b);
  };

  const showCard = (no) => {
    return CardsArr[no - 1].map((card) => {
      return (
        <div style={{ marginRight: no % 2 !== 0 ? "3rem" : 0 }}>
          <TestimonialsCard img={card.img} name={card.name} />
        </div>
      );
    });
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={`h3 ${styles.title}`}>
          Our customers say the nicest things about our service
        </div>
        <div className={styles.testimonials}>{showCard(ShowingNo)}</div>
        <div className={styles.cards_records}>
          {CardsArr.map((cards) => {
            if (ShowingNo - 1 === CardsArr.indexOf(CardsArr[ShowingNo - 1])) {
              return <div className={styles.cards_record_on}></div>;
            } else {
              return <div className={styles.cards_record_off}></div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
