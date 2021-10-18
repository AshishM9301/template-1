import React from "react";
import ReactStars from "react-rating-stars-component";

import { FaStar, FaStarHalf } from "react-icons/fa";

function Star({size,count,value,color,activeColor,isHalf}) {
  const starFront = {
    size: size,
    count: count,
    color: color,
    activeColor: activeColor,
    value: value,
    //a11y: true,
    isHalf: isHalf,
    emptyIcon: FaStar,
    halfIcon: FaStarHalf,
    filledIcon: FaStar,
    edit: false,
  };

  const starBack = {
    size: size,
    count: count,
    color: color,
    activeColor: activeColor,
    value: 0,
    //a11y: true,
    isHalf:false,
    emptyIcon: FaStar,
    halfIcon: FaStarHalf,
    filledIcon: FaStar,
    edit: false,
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <ReactStars {...starBack} />
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <ReactStars {...starFront} />
        </div>
      </div>
    </div>
  );
}

export default Star;
