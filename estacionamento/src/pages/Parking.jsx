import List from "../components/List";
import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

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
