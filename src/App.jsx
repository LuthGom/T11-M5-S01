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
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
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
    </div>
  );
}


export default App;
