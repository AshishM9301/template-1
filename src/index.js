import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Homepage from "./components/Pages/Homepage/Homepage";
import Services from "./components/Pages/Services/Services";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
