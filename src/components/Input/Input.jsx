import React from "react";
import { Container } from "./InputStyled.jsx";
import {FormControl, FormLabel } from 'react-bootstrap';

function Input({ nome, onChange, name, type, register, value }) {
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
    // criamos uma props de nome register e passamos para o input para que ele entenda que: quando o componente <Input /> for chamado, ele pode receber como argumento dentro dessa props um objeto com valores vindos do componente register do useForm, onde quer que ele seja chamado.
        {...register}
      />
    </Container>
  );
}

export default Input;
