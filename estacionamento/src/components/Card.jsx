import React from "react";
import "../css/card.css";

const Card = ({ children, title }) => {
  return (
    <div className="card">
      {title && <h1 className="title">{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
