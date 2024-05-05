import React from "react";
import TableHead from "./TableHead";

const TableBodyParking = () => {
  const forms = sessionStorage.getItem("forms");
  const items = JSON.parse(forms);

  return (
    <>
      <table>
        <TableHead />
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
    </>
  );
};

export default TableBodyParking;
