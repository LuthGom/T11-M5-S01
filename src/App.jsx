import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import PaginaDeErro from "./pages/PaginaDeErro/PaginaDeErro.jsx";
import Home from "./pages/Home/Home";
import Visualizar from "./pages/Visualizar/Visualizar";
function App() {
  const [desabilitado, setDesabilitado] = useState(false);
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/visualizar/:id" element={<Visualizar />} />
          <Route path="*" element={<PaginaDeErro />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

class Teste extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
export default App;
