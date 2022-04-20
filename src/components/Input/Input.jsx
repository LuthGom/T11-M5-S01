import React from "react";
import { Container } from "./InputStyled.jsx";
import {FormControl, FormLabel } from 'react-bootstrap';

function Input({ nome, onChange, name, type, value }) {
      // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container e o InputTexto

  return (
    // troca da estilização styled para compenentes correspodentes ao input e Label do react-bootstrap e o container.
    // deixei o container criado com styled para vermos que podemos misturar diferentes formas de estilização CSS.
    <Container >
      <FormLabel htmlFor="nome">{nome}</FormLabel>
      <FormControl
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
