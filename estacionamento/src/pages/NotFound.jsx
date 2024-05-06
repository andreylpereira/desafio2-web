import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const NotFound = () => {
  return (
    <Card title={"Página não encontrada!"}>
    <div>
      <p>
        A URL que você tentou acessar não corresponde a nenhuma página válida.
      </p>
      <Link to="/">Retornar para pagina inicial.</Link>
    </div>
    </Card>
  );
};
export default NotFound;