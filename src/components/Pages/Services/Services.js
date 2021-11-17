import React from "react";
import CTA from "../Homepage/CTA/CTA";
import AllServices from "./AllServices/AllServices";
import Header from "./Header/Header";
import How1 from "./How1/How1";
import How2 from "./How2/How2";

function Services() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <AllServices />
      </div>
      <div>
        <How1 />
      </div>
      <div>
        <How2 />
      </div>
      <div>
        <CTA />
      </div>
    </div>
  );
}

export default Services;
