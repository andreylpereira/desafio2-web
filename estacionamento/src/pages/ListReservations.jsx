import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const ListReservations = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const forms = sessionStorage.getItem("forms");
    const parsedForms = JSON.parse(forms);
    setItems(parsedForms);
  }, []);

  const deleteForm = (index) => {
    const updatedForms = [...items];
    updatedForms[index] = null;
    sessionStorage.setItem("forms", JSON.stringify(updatedForms));
    setItems(updatedForms);
  };

  const isNull = items.every((item) => item === null);

  return (
    <>
      <Navbar />
      <Card title="RESERVA DE VAGAS">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isNull ? (
              <tr>
                <td colSpan="8">Nenhuma reserva de vaga foi feita ainda!</td>
              </tr>
            ) : (
              items.map((item, index) => (
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
                      <td>
                        <button
                          className="btn-delete"
                          onClick={() => deleteForm(index)}
                        >
                          DELETE
                        </button>
                      </td>
                    </>
                  ) : null}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default ListReservations;
