import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Parking from "./pages/Parking";
import Reservations from "./pages/Reservations";

const App = () => {
  
  const formList = JSON.parse(sessionStorage.getItem("forms")) || Array(10).fill(null);
  sessionStorage.setItem("forms", JSON.stringify(formList));
  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list-park" element={<Parking />} />
          <Route path="/list-reservations" element={<Reservations />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
