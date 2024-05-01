import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const ListPark = () => {
  const forms = sessionStorage.getItem("forms");
  const items = JSON.parse(forms);

  return (
    <>
      <Navbar />
      <Card title="LISTA DE VAGAS">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item !== null ? item.placa : "Vaga disponível"}
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default ListPark;
