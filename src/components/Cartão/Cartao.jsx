// O cartão é um componente que a priori, apenas recebia as informações dinâmicamente quando chamado na page Home.
// Agora, ele possui um botão que recebe uma function. E dentro dessa function fazemos uma requisição com o Método DELETE para a API com o parametro :id.

import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./CartaoStyled";
export default function Cartao({ id, name, img }) {

  return (
    // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container
    <Container>
      <h1>{name}</h1>
      <img src={img} alt=""/>

      {/* usando Link */}
      <Link to={"/visualizar/" + id}>Visualizar</Link>
      {/* <Button nome="Deletar" click={handleDelete} /> */}
    </Container>
  );
}
