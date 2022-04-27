// Importamos o hooj useContext para conseguirmos acessar algum contexto
import React, {useContext} from "react";
import { Container } from "./InputStyled.jsx";
import {FormControl, FormLabel } from 'react-bootstrap';
// importamos o ContextThemes para que possamos passar seu contexto para o useContext para que seja acessado.
import {ContextThemes} from "../ContextThemes/ContextextThemes.js"
function Input({ nome, onChange, name, type, register, value }) {
      // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container e o InputTexto
// criamos uma conste que recebe o hook useContext e atribuimos o contexto importado de ContextThemes a essa const.
  const tema = useContext(ContextThemes)
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
        style={{backgroundColor: tema.dark.background}}
    // criamos uma props de nome register e passamos para o input para que ele entenda que: quando o componente <Input /> for chamado, ele pode receber como argumento dentro dessa props um objeto com valores vindos do componente register do useForm, onde quer que ele seja chamado.
        {...register}
      />
    </Container>
  );
}

export default Input;
