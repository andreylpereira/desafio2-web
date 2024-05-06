import React from "react";
import List from "../components/List";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Reservations = () => {
  
  return (
    <>
      <Navbar />
      <Card title="RESERVA DE VAGAS">
        <List listType={"Reservations"} />
      </Card>
    </>
  );
};

export default Reservations;
