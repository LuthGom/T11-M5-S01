import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import PaginaDeErro from "./pages/PaginaDeErro/PaginaDeErro.jsx"
import Home from "./pages/Home/Home";
function App() {
  const [desabilitado, setDesabilitado] = useState(false);
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<PaginaDeErro />}/>
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
