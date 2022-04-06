import React from 'react';
import styles from "./Input.module.css";

function Input({nome, onChange}) {

    return ( 
        <div className={styles.containerEstilo}>
        <label htmlFor="nome">{nome}</label>
        <input
          className={styles.inputEstilo}
          type="text"
          name="nome"
          id="nome"
          onChange={onChange}
        />
      </div>
     );
}

export default Input;