import React from "react";
import { useReducer } from "react";
import styles  from "./Usuario.module.css";

const inicio = {
    nome: "",
    idade: 21
};

const redutor = (state, action) => {
    switch(action.type) {
        case 'SET_NOME':
            return {...state, nome: action.payload}
        case 'AUMENTAR_IDADE':
            return {...state, idade: state.idade + 1}
        case 'DIMINUIR_IDADE':
            return {...state, idade: state.idade - 1}
        default:
            return state;
    }
};


function Usuario2() {
const [state, dispatch] = useReducer(redutor, inicio);
    

    return(
        <div className={styles.usuario}>
            <h2>Usuário</h2>
            <label>Nome</label><br/>
            <input type="text" value={state.nome} onChange={(e) => dispatch({type: 'SET_NOME', payload: e.target.value})}/><br/>   
            <div>
                <label>Idade</label><br/>
                <button className={styles.botoes} onClick={() => dispatch({type: 'DIMINUIR_IDADE'})}>-</button>
                <p>{state.idade}</p>
                <button className={styles.botoes} onClick={() => dispatch({type: 'AUMENTAR_IDADE'})}>+</button>
            </div>
        </div>
    )
};

export default Usuario2;