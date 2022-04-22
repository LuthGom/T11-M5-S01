import React from "react";
import Button from "react-bootstrap/Button";
function Botao({ click, nome }) {
  // criamos uma estilização styled dentro do próprio arquivo jsx.
  // const Botao = styled.button`
  //   background-color: blue;
  //   border-radius: 10px;
  // `;
  return (
    <>
      {/* importamos um componente do react-bootstrap já pronto e estilizamos utilizando a props 'variant' que o próprio bootstrap já traz para alternarmos entre as propriedades que ele já criou. */}
      <Button variant="success" type="submit" onClick={click}>
        {nome}
      </Button>
    </>
  );
}

export default Botao;
