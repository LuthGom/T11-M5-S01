// No recap da aula 13, fizemos juntos uma requisição do Método POST para uma API que aceita cadastro de usuários. A Url pode ser vista na services.
// substituímos a rota que antes havia, passamos o state value como o objeto com os valores que servirão como nosso body para essa requisição.
// Criamos a função anônima Api para essa requisição e chamamos na function submit a qual passamos pr o atributo onSubmit do nosso form que engloba todos os inputs.
// Além disso, a função submit é chamada no evento de click do Button que possui type submit

import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { cadastroUser } from "../../services/Api.js";
function Formulario() {
  const [value, setValue] = useState({});
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  console.log("value", value);
  const Api = () => {
    cadastroUser.post("/usuario", value)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((erro) => console.log(erro))
  };
  // console.log(value);
  function submit(e) {
    e.preventDefault();
    Api();
    // utilizando navigate
    // navigate("/");
  }
  return (
    // Construímos um Componente de Input com tags input/type(text) e label reutilizáveis em qualquer lugar do projeto
    // Aqui temos dois componentes react-bootstrap para estilização em grid: Col (de colunas) e Row de (linhas)
    // Roda o projeto e dá uma olhad em como fica.
    <form onSubmit={submit}>
      {/* <Container> */}
        {/* <Row> */}
          {/* <Col> */}
            <Input nome="Nome" onChange={handleChange} name="nome" />

            <Input nome="Apelido" onChange={handleChange} name="apelido" />
          {/* </Col> */}
          {/* <Col> */}
            <Input nome="Email" onChange={handleChange} name="email" />

            <Input
              nome="Senha"
              onChange={handleChange}
              name="senha"
              type="password"
            />
          {/* </Col> */}
        {/* </Row> */}
        {/* <Row> */}
          <div style={{ margin: "1em 0" }}>
            <Button nome="Enviar" />
          </div>
        {/* </Row> */}
      {/* </Container> */}
    </form>
  );
}

export default Formulario;
