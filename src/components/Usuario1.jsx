import React from "react";
import { useState } from "react";
import styles  from "./Usuario.module.css";

function Usuario1() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(21);

    return(
        <div className={styles.usuario}>
            <h2>Usuário</h2>
            <label>Nome</label><br/>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/><br/>
            <div>
                <label>Idade</label><br/>
                <button className={styles.botoes} onClick={() => setIdade(idade - 1)}>-</button>
                <p>{idade}</p>
                <button className={styles.botoes} onClick={() => setIdade(idade + 1)}>+</button>
            </div>   
        </div>
    )
}

export default Usuario1;