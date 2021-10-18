import React from "react";

function Oval({
  text,
  text2,
  component,
  color,
  bgColor,
  boxShadowColor,
  type,padding
}) {
  const styles = {
    coverOval: {
      background: bgColor,
      padding: "12px",
      borderRadius: "3.688rem",
    //  width: "17.603rem",
    },
    ovalBg: {
      background: color,
      // border: `12px solid ${bgColor} `,
      boxShadow: `0px 28px 118px ${boxShadowColor}`,
      borderRadius: "3.688rem",
      display: "flex",
      alignItems: "center",
      padding: padding,
    },
    oval_component: {
      marginRight: "14px",
    },
    oval_text: {
      fontWeight: "600",
      fontSize: "1.5rem",
      lineHeight: "2.25",
      letterSpacing: "-0.03em",
      color: "var(--black)",
    },
    oval_text_type_2: {
    marginRight: "15px", fontWeight: "600",
    fontSize: "1.5rem",
   
    letterSpacing: "-0.03em",
    color: "var(--black)",
    },
    oval_type_2_text_2: {
      fontWeight: "500",
      fontSize: "1rem",
     
      letterSpacing: "-0.03em",
      color: "var(--black)",
      opacity: "0.7",
    },
  };

  if (type === 1)
    return (
      <div style={styles.coverOval}>
        <div style={styles.ovalBg}>
          <div style={styles.oval_component}>{component}</div>
          <div style={styles.oval_text}>{text}</div>
        </div>
      </div>
    );

  if (type === 2)
    return (
      <div style={styles.coverOval}>
        <div style={styles.ovalBg}>
          <div style={styles.oval_text_type_2}>
            <div>{text}</div>
            <div style={styles.oval_type_2_text_2}>{text2}</div>
          </div>
          <div style={styles.oval_type_2_component}>{component}</div>
        </div>
      </div>
    );
}

export default Oval;
