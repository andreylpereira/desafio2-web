import React from "react";

export const TableHead = ({ isReservations }) => {
  return (
    <thead>
      <tr>
        <th>Vaga</th>
        <th>Placa</th>
        <th>Proprietário</th>
        <th>Nº apartamento</th>
        <th>Bloco</th>
        <th>Modelo</th>
        <th>Cor</th>
        {isReservations === true ? <th></th> : null}
      </tr>
    </thead>
  );
};
export default TableHead;
