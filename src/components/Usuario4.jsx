import React from "react";
import styles  from "./Usuario.module.css";

function Usuario4({nome, idade, mudarNome, diminuirIdade, aumentarIdade, deletarUsuario}) {
    return(
        <div className={styles.usuario}>
            <button onClick={deletarUsuario}>Apagar Usuário</button>
            <h2>Usuário</h2>
            <label>Nome</label><br/>
            <input type="text" value={nome} onChange={(e) => mudarNome(e.target.value)}/><br/>   
            <label>Idade</label>
            <button className={styles.botoes} onClick={diminuirIdade}>-</button>
            <p>{idade}</p>
            <button className={styles.botoes} onClick={aumentarIdade}>+</button>
        </div>
    )
};

export default Usuario4;