import React, { Component } from "react";

class Formulario extends Component {
  render() {
    const containerEstilo = {
      display: "flex",
      flexDirection: "column",
    };
    const inputEstilo = {
      width: "90%",
      padding: "12px 20px",
      marginBottom: "20px",
    };
    const botaoEstilo = {
      width: "80px",
      padding: "5px 20px",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor: "#ddd255",
      border: "1px solid #cccccc",
    };
    return (
      <div>
        <div style={containerEstilo}>
          <label htmlFor="nome">Nome Completo</label>
          <input style={inputEstilo} type="text" name="nome" id="nome" />
        </div>
        <div style={containerEstilo}>
          <label htmlFor="email">E-mail</label>
          <input style={inputEstilo} type="text" name="email" id="email" />
        </div>
        <div style={containerEstilo}>
          <label htmlFor="">Telefone</label>
          <input
            style={inputEstilo}
            type="text"
            name="telefone"
            id="telefone"
          />
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </div>
    );
  }
}

export default Formulario;
