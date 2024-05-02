import React, { useState } from "react";
import Card from "./card";
import "../css/form.css";

const Form = () => {
  const [form, setForm] = useState({
    placa: "",
    proprietario: "",
    apartamento: "",
    bloco: "",
    modelo: "",
    cor: "",
    vaga: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmpty = Object.values(form).some((value) => value === "");
    if (isEmpty) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    
    console.log("Dados do formulário:", form);
    const formList =
      JSON.parse(sessionStorage.getItem("forms")) || Array(10).fill(null);
    formList[form.vaga - 1] = form;
    sessionStorage.setItem("forms", JSON.stringify(formList));
    alert(
      `O veículo de placa ${form.placa} do ${form.proprietario} foi cadastrado com sucesso!`
    );
    resetForm();
  };

  const resetForm = () => {
    setForm({
      placa: "",
      proprietario: "",
      apartamento: "",
      bloco: "",
      modelo: "",
      cor: "",
      vaga: "",
    });
  };

  return (
    <Card title="CADASTRO DE RESERVA DE VAGAS">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Placa do veículo</label>
          <input
            type="text"
            name="placa"
            placeholder="Digite a placa do veículo"
            value={form.placa}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Nome do proprietário</label>
          <input
            type="text"
            name="proprietario"
            placeholder="Digite o nome do proprietário"
            value={form.proprietario}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Número do apartamento</label>
          <input
            type="number"
            name="apartamento"
            placeholder="Digite o número do apartamento"
            value={form.apartamento}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Bloco do apartamento</label>
          <input
            type="text"
            name="bloco"
            placeholder="Digite o bloco do apartamento"
            value={form.bloco}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Modelo do veículo</label>
          <input
            type="text"
            name="modelo"
            placeholder="Digite o modelo do veículo"
            value={form.modelo}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Cor do veículo</label>
          <input
            type="text"
            name="cor"
            placeholder="Digite a cor do veículo"
            value={form.cor}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Número da vaga</label>
          <input
            type="number"
            name="vaga"
            placeholder="Digite o número da vaga"
            value={form.vaga}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <button type="submit" style={{ marginTop: "15px" }}>
            CADASTRAR
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
