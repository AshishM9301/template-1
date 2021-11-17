import React, { useEffect, useState } from "react";

import styles from "./Testimonials.module.css";
import TestimonialsCard from "./Testimonials_Card";
import Circle from "../../../bubbles/Circle/circle";

import LeftArrowIcon from "../../../Icons/LeftArrowIcon";
import RightArrowIcon from "../../../Icons/RightArrowIcon";

function Testimonials() {
  const [CardsArr, setCardsArr] = useState([[]]);
  const [ShowingNo, setShowingNo] = useState(1);
  const [LeftHover, setLeftHover] = useState(false);
  const [RightHover, setRightHover] = useState(false);

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
      img: "https://images.unsplash.com/photo-1634780646019-28757f7e11d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      name: "Smith Johnson",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1634780646019-28757f7e11d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      name: "Smith Johnson",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1634780646019-28757f7e11d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
      name: "Jonathan Vallem",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1612213467906-20440d15bdb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      name: "Smith Johnson",
      location: "New York",
      testimonial:
        "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working",
    },
  ];

  useEffect(() => {
    data();
  });

  const data = () => {
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
  };

  const showCard = (no) => {
    return CardsArr[no - 1].map((card, index) => {
      console.log(index);
      return (
        <div style={{ marginRight: index === 0 ? "3rem" : 0 }}>
          <TestimonialsCard img={card.img} name={card.name} />
        </div>
      );
    });
  };

  const cardsChangeUi = () => {
    return CardsArr.map((cards, index) => {
      return (
        <div
          className={
            ShowingNo - 1 === index
              ? styles.cards_record_on
              : styles.cards_record_off
          }
        ></div>
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
        <div className={styles.sliderLines_Container}>
          <div style={{ width: "8.5rem" }}></div>
          <div className={styles.cards_records}>{cardsChangeUi()}</div>
          <div className={styles.slider}>
            <div
              className={styles.left_slider}
              onMouseEnter={() => setLeftHover(true)}
              onMouseLeave={() => setLeftHover(false)}
              onClick={() => setShowingNo(ShowingNo - 1)}
            >
              <Circle
                type={4}
                size={LeftHover ? "3.875rem" : "3rem"}
                component={
                  <LeftArrowIcon
                    hover={LeftHover}
                    fill={LeftHover ? "var(--white)" : "var(--black)"}
                  />
                }
                color={LeftHover ? "var(--black)" : "var(--white)"}
              />
            </div>
            <div
              className={styles.right_slider}
              onMouseEnter={() => setRightHover(true)}
              onMouseLeave={() => setRightHover(false)}
              onClick={() => setShowingNo(ShowingNo + 1)}
            >
              <Circle
                type={4}
                size={RightHover ? "3.875rem" : "3rem"}
                component={
                  <RightArrowIcon
                    hover={RightHover}
                    fill={RightHover ? "var(--white)" : "var(--black)"}
                  />
                }
                color={RightHover ? "var(--black)" : "var(--white)"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
