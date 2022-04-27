import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import PaginaDeErro from "./pages/PaginaDeErro/PaginaDeErro.jsx";
import Home from "./pages/Home/Home";
import Visualizar from "./pages/Visualizar/Visualizar";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import { ContextThemes } from "./components/ContextThemes/ContextextThemes.js";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // criamos um objeto que será acessível, pois passamos ele como um conexto global para toda a aplicação, usando o ContextThemes.Provider, que engloba todos os componentes.
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  return (
    <div className="app">
      {/* Onde declaramos o ContextThemes como nosso componente global que rebece um objeto no atributo value para que seja acessado de qualquer lugar. */}
      <ContextThemes.Provider value={themes}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/visualizar/:id" element={<Visualizar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="*" element={<PaginaDeErro />} />
          </Routes>
        </Router>
      </ContextThemes.Provider>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
