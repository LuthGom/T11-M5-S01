import React from "react";
import { Container, InputTexto } from "./InputStyled.jsx";

function Input({ nome, onChange, name, type, value }) {
      // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container e o InputTexto

  return (
    <Container>
      <label htmlFor="nome">{nome}</label>
      <InputTexto
        type={type}
        name={name}
        id="nome"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

export default Input;
