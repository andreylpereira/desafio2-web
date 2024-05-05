import React from "react";
import List from "../components/List";
import Navbar from "../components/navbar";
import Card from "../components/card";

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
