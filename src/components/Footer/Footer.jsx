import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footerEstilo = {
      width: "100%",
      height: "100px",
      backgroundImage:
        "linear-gradient(red, orange, yellow, green, blue, purple, pink, white, black)",
      color: "white",
      fontSize: "30px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: '2.5em'
    };
    return (
      <div>
        <footer style={footerEstilo}>Esse é o Footer da T11 🦈</footer>
      </div>
    );
  }
}

export default Footer;
