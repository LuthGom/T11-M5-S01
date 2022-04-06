import React, { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/FormularioContato.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  const [desabilitado, setDesabilitado] = useState(false);
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div>
      <div>
        <Header />
        <h1>Olá, Mundo</h1>
      </div>
      <div>
        <Formulario />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
