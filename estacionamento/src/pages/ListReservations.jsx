import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const ListReservations = () => {
  const forms = sessionStorage.getItem("forms");
  const items = JSON.parse(forms);

  return (
    <>
      <Navbar />
      <Card title="VAGAS RESERVADAS">
        <ul>
          {items.map((item, index) =>
            item !== null ? <li key={index}>{item.placa}</li> : null
          )}
        </ul>
      </Card>
    </>
  );
};

export default ListReservations;
