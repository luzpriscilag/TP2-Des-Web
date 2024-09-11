import React from "react";
import styles  from "./Usuario.module.css";

function Usuario3({nome, idade, mudarNome, diminuirIdade, aumentarIdade}) {
    return(
        <div className={styles.usuario}>
            <h2>Usuário</h2>
            <label>Nome</label><br/>
            <input type="text" value={nome} onChange={(e) => mudarNome(e.target.value)}/><br/>   
            <label>Idade</label><br/>
            <button onClick={diminuirIdade} className={styles.botoes}>-</button>
            <p>{idade}</p>
            <button onClick={aumentarIdade} className={styles.botoes}>+</button>
        </div>
    )
};

export default Usuario3;