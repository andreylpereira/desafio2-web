import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListPark from './pages/ListPark';
import ListReservations from './pages/ListReservations';


const App = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list-park" element={<ListPark />} />
        <Route path="/list-reservations" element={<ListReservations />} />
      </Routes>
    </div>
  </Router>
);

export default App;
