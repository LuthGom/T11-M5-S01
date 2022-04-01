import React, { Component } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario.jsx";
class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Hello, World!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Formulario />
        </div>
      </div>
    );
  }
}

export default App;
