import React, { useState } from "react";
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
import { ContextThemes } from "./context/ContextextThemes.js";
import { UsuarioContext } from "./context/UsuarioContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // criamos um objeto que será acessível, pois passamos ele como um conexto global para toda a aplicação, usando o ContextThemes.Provider, que engloba todos os componentes.
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };
  // Criamos um state para que seja passado como value para o nosso contexto e, assim, possa ser utilizado como value do nosso UsuarioContext e possa tambem ter seu valor atualizado e acessível em qual lugar.
  const [user, setUser] = useState({});
  return (
    <div className="app">
      {/* Importamos e englobamos todo o código pelo UsuarioContext.Provider para que seja acessível em qualquer lugar do nosso projeto. Além disso, a props value do Provider, recebe o state user e seu setUser, para que seu valor seja tão acessível quanto atualizável. */}
      <UsuarioContext.Provider value={{user, setUser}}>
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

          <div>
            <Footer />
          </div>
        </ContextThemes.Provider>
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
