
import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { api } from "../../services/Api.js";
import {useNavigate} from "react-router-dom";
function Formulario() {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  console.log(value);
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  const Api = () => {
    api.post("/contacts", value);
  };
  console.log(value);
  function submit(e) {
    e.preventDefault();
    Api();
    // utilizando navigate
    navigate("/")
  }
  return (
    // Construímos um Componente de Input com tags input/type(text) e label reutilizáveis em qualquer lugar do projeto
    <form onSubmit={submit}>
      <Input nome="Nome" onChange={handleChange} name="name" />
      <Input nome="Email" onChange={handleChange} name="email" />
      <Input nome="Telefone" onChange={handleChange} name="phone" />

      <div>
        <Button nome="Enviar" />
      </div>
    </form>
  );
}

export default Formulario;
