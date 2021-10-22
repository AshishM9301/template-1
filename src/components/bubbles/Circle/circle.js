import React from "react";

function Circle({ text1, text2, color, type, imgsrc, size }) {
  const styles = {
    bubble: {
      width: size ? size : "4.375rem",
      height: size ? size : "4.375rem",
      borderRadius: "1000rem",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    bubble_1_text_1: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "2.25rem",
      color: "var(--white)",
      marginRight: "3px",
    },
    bubble_1_text_2: {
      fontSize: "1rem",
      fontWeight: "600",
      lineHeight: "1.5rem",
      color: "var(--white)",
      marginBottom: "-3px",
    },
    eclipse: {
      position: "absolute",
      bottom: 0,
    },
  };
  if (type === 1)
    return (
      <div style={styles.bubble}>
        <div style={styles.bubble_1_text_1}>{text1}</div>
        <div style={styles.bubble_1_text_2}>{text2}</div>
      </div>
    );

  if (type === 2)
    return (
      <div style={styles.bubble}>
        <img src={imgsrc} alt="Component" />
      </div>
    );

  if (type === 3)
    return (
      <div style={styles.bubble}>
        <div style={styles.bubble_1_text_1}>{text1}</div>
        <img src={imgsrc} alt="Component" style={styles.eclipse} />
      </div>
    );
}

export default Circle;
