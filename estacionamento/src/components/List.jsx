import React from "react";
import TableBodyParking from "./listTables/TableBodyParking";
import TableBodyReservations from "./listTables/TableBodyReservations";

const List = ({ listType }) => {
  if (listType === "park") {
    return <TableBodyParking />;
  } else {
    return <TableBodyReservations />;
  }
};

export default List;
