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
        <table>
          <thead>
            <tr>
              <th>Vaga</th>
              <th>Placa</th>
              <th>Proprietário</th>
              <th>Nº apartamento</th>
              <th>Bloco</th>
              <th>Modelo</th>
              <th>Cor</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                {item !== null ? (
                  <>
                    <td>{item.vaga}</td>
                    <td>{item.placa}</td>
                    <td>{item.proprietario}</td>
                    <td>{item.apartamento}</td>
                    <td>{item.bloco}</td>
                    <td>{item.modelo}</td>
                    <td>{item.cor}</td>
                  </>
                ) : (
                  <>
                    <td colSpan="8">Vaga disponível</td>

                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default ListPark;
