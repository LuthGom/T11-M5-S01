import React from 'react';
import styles from "./Input.module.css";

function Input({nome, onChange, name, type, value, contentEditable}) {

    return ( 
        <div className={styles.containerEstilo}>
        <label htmlFor="nome">{nome}</label>
        <input
          className={styles.inputEstilo}
          type={type}
          name={name}
          id="nome"
          value={value}
          onChange={onChange}
          contentEditable={contentEditable}
        />
      </div>
     );
}

export default Input;