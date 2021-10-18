import React from "react";

function Circle({ text1, text2, color }) {
  const styles = {
    bubble: {
      width: "4.375rem",
      height: "4.375rem",
      borderRadius: "1000rem",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    },
  };
  if (text2)
    return (
      <div style={styles.bubble}>
        <div style={styles.bubble_1_text_1}>{text1}</div>
        <div style={styles.bubble_1_text_2}>{text2}</div>
      </div>
    );
}

export default Circle;
