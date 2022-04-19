import React from "react";
import styled from "styled-components";
function Button({ click, nome }) {
  // criamos uma estilização styled dentro do próprio arquivo jsx.
  const Botao = styled.button`
    background-color: blue;
    border-radius: 10px;
  `;
  return (
    <div>
      <Botao onClick={click}>{nome}</Botao>
    </div>
  );
}

export default Button;
