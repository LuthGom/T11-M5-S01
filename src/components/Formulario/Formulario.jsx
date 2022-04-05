// import React from "react";
import styles from "./Formulario.module.css";
import contactPic from "../../assets/contact-pic.jpg";
function Formulario() {


  return (
    <div>
      <div className={styles.containerEstilo}>
        <label htmlFor="nome">Nome Completo</label>
        <input
          className={styles.inputEstilo}
          type="text"
          name="nome"
          id="nome"
        />
      </div>
      <div className={styles.containerEstilo}>
        <label htmlFor="email">E-mail</label>
        <input
          className={styles.inputEstilo}
          type="text"
          name="email"
          id="email"
        />
      </div>
      <div className={styles.containerEstilo}>
        <label htmlFor="">Telefone</label>
        <input
          className={styles.inputEstilo}
          type="text"
          name="telefone"
          id="telefone"
        />
      </div>
      <div>
        <button className={styles.botaoEstilo}>Enviar</button>
      </div>
    </div>
  );
}

export default Formulario;
