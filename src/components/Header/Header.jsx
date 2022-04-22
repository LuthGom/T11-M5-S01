import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div>
      <header className={styles.headerEstilo}>
        <Link to="/">Home</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/drinks">Drinks</Link>
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
}

export default Header;
