import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/list-park">Click para ir para ListPark</Link>
    <br />
    <Link to="/list-reservations">Click para ir para ListReservations</Link>
  </div>
);

export default Home;