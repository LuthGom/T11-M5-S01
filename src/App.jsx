import React, { Component } from "react";
import "./App.css";
import AtividadeDeClientes from "./components/AtividadeDeClientes/AtividadeDeClientes";
import Formulario from "./components/Formulario/Formulario.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
class App extends Component {
  render() {
    return (
      <div>
        {/* Atividade dos componentes de Header, formulário e Footer. Os respectivos componentes podem ser encontrados na pasta components  */}
        <div>
          <div>
            <Header />
            <h1 style={{ textAlign: "center" }}>Hello, World!</h1>
          </div>
          <div>
            <Formulario />
          </div>
          <div>
            <Footer />
          </div>
        </div>

        {/* ------- */}

        {/* Componente com a atividade dos clientes João e Maria. O componente pode ser encontrado na pasta compenents */}
        {/* <div>
          <AtividadeDeClientes />;
        </div> */}
      </div>
    );
  }
}

export default App;
