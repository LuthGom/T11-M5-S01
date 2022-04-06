import React, { useState } from "react";
import Input from "../Input/Input.jsx";
// import contactPic from "../../assets/contact-pic.jpg";
import Button from "../Button/Button.jsx";
function Formulario() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    // Construímos um Componente de Input com tags input/type(text) e label reutilizáveis em qualquer lugar do projeto
    <div>
      <Input nome="Nome Completo" onChange={(e) => setValue(e.target.value)} />
      <Input nome="E-mail" />
      <Input nome="Telefone" />
      <div>
        <Button nome="Enviar" click={() => alert("Botão funcionou!")} />
      </div>
    </div>
  );
}

export default Formulario;
