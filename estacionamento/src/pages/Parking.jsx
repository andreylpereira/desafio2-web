import List from "../components/List";
import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Parking = () => {
  return (
    <>
      <Navbar />
      <Card title="LISTA DE VAGAS">
        <List listType={"park"} />
      </Card>
    </>
  );
};

export default Parking;
