import React from "react";

function BatteriesIcon({ hover, color }) {
  return (
    <div>
      <svg
        width="44"
        height="40"
        viewBox="0 0 44 40"
        fill={hover ? color : null}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.5 2.58322C38.5 1.57077 37.6792 0.75 36.6668 0.75H29.3332C28.3208 0.75 27.5 1.57077 27.5 2.58322V6.25H38.5V2.58322Z"
          fill="#1E1B1B"
        />
        <path
          d="M16.5 2.58322C16.5 1.57077 15.6792 0.75 14.6668 0.75H7.33322C6.32077 0.75 5.5 1.57077 5.5 2.58322V6.25H16.5V2.58322Z"
          fill="#1E1B1B"
        />
        <path
          d="M0 8.08325V35.5833C0 36.5957 0.82077 37.4168 1.83322 37.4168H5.5V39.25H9.16678V37.4168H34.8332V39.25H38.5V37.4168H42.1668C43.1792 37.4168 44 36.5957 44 35.5833V8.08325H0ZM14.6668 33.75L18.3332 22.75H12.8332L25.6668 11.75L22 22.75H27.5L14.6668 33.75Z"
          fill="#1E1B1B"
        />
      </svg>
    </div>
  );
}

export default BatteriesIcon;
