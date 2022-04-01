import React, { Component } from "react";

class AtividadeDeClientes extends Component {
  render() {
    function totalDeCompras(...precos) {
      return precos
        .map((item) => Number(item.preco))
        .reduce((acumulador, valorAtual) => acumulador + valorAtual);
    }
    const cartaoEstilo = {
      backgroundColor: "grey",
      padding: "1em",
    };
    const tituloEstilo = {
      fontSize: "50px",
      color: "white",
    };
    const clienteJoao = {
      nome: "João",
      idade: 37,
      compras: [
        { nome: "Notebook", preco: "2500" },
        { nome: 'Motocicleta"', preco: "10000" },
        { nome: "Smartphone", preco: "1500" },
        { nome: "Conjunto de panelas", preco: "2000" },
      ],
      cidade: "Belém",
    };
    const clienteMaria = {
      nome: "Maria",
      idade: 18,
      compras: [
        { nome: "Computador", preco: "2500" },
        { nome: "Coletânia de livros", preco: "1000" },
        { nome: "Smartphone", preco: "1500" },
      ],
      cidade: "Rio de Janeiro",
    };
    // Uma função reutilizável que aceita os valores de um objeto dentro de array, e utilizando o rest para aceitar mais de um argumento como viaoms na segunda.

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hello, World!</h1>
        {/* # atividade da aula 2 - Formulário #
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Formulario />
            </div> */}
        {/* # atividades da aula 3 -Compentente de Clientes # */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "whitesmoke",
          }}
        >
          {/* Cliente Maria */}
          <div style={cartaoEstilo}>
            <p style={tituloEstilo}>
              <span style={{ fontWeight: "bold" }}>Cliente 1:</span>{" "}
              {clienteMaria.nome}
            </p>
            <p style={{ fontSize: "40px" }}>
              <span> - Idade:</span> {clienteMaria.idade}
            </p>
            <p style={{ fontSize: "40px" }}>
              <span> - Total de compras: R$ </span>{" "}
              {totalDeCompras(...clienteMaria.compras)}
            </p>
          </div>
          {/* Cliente João */}
          <div style={cartaoEstilo}>
            <p style={tituloEstilo}>
              <span style={{ fontWeight: "bold" }}>Cliente 2:</span>{" "}
              {clienteJoao.nome}
            </p>
            <p style={{ fontSize: "40px" }}>
              <span> - Idade:</span> {clienteJoao.idade} anos
            </p>
            <p style={{ fontSize: "40px" }}>
              <span> - Total de compras:R$ </span>{" "}
              {totalDeCompras(...clienteJoao.compras)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AtividadeDeClientes;
