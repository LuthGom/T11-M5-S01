// O cartão é um componente que a priori, apenas recebia as informações dinâmicamente quando chamado na page Home.
// Agora, ele possui um botão que recebe uma function. E dentro dessa function fazemos uma requisição com o Método DELETE para a API com o parametro :id.

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/Api";
import Button from "../Button/Button";
import { Container } from "./CartaoStyled";
export default function Cartao({ id, name, img }) {
  const navigate = useNavigate();
  function handleDelete() {
    api.delete("/fairies/" + id);
    alert("Usuario deletado");
    navigate("/");
  }
  return (
    // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container
    <Container>
      <h1>{name}</h1>
      <img src={img} />

      {/* usando Link */}
      <Link to={"/visualizar/" + id}>Visualizar</Link>
      {/* <Button nome="Deletar" click={handleDelete} /> */}
    </Container>
  );
}
