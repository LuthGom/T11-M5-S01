import React from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      {/* Atividade dos componentes de Header, formulário e Footer. Os respectivos componentes podem ser encontrados na pasta components  */}
      <div>
        <div>
          <Header />
          <h1
            style={{
              textAlign: "center",
              // fontFamily: 'Rubik Glitch, cursive'
            }}
          >
            Hello, World!
          </h1>
        </div>
        <div>
          <Formulario />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
