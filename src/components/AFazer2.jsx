import React, { useReducer, useState } from 'react';
import styles from './AFazer.module.css';

const redutor = (state, action) => {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return [...state, { id: Date.now(), texto: action.payload }];
    case 'REMOVER_TAREFA':
      return state.filter((tarefa) => tarefa.id !== action.payload);
    case 'RISCAR_TAREFA':
      return state.map((tarefa) =>
        tarefa.id === action.payload ? { ...tarefa, finalizada: !tarefa.finalizada } : tarefa
      );
    default:
      return state;
  }
};

const AFazer2 = () => {
  const [tarefas, dispatch] = useReducer(redutor, []);
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      dispatch({ type: 'ADICIONAR_TAREFA', payload: tarefa });
      setTarefa('');
    }
  };

  const RemoverTarefa = (tarefaId) => {
    dispatch({ type: 'REMOVER_TAREFA', payload: tarefaId });
  };

  const riscarTarefa = (tarefaId) => {
    dispatch({type: 'RISCAR_TAREFA', payload: tarefaId});
  }

  return (
    <div className={styles.lista}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Novo a fazer"
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={{ textDecoration: tarefa.finalizada ? 'line-through' : 'none' }}>
            <button onClick={() => riscarTarefa(tarefa.id)}>
              {tarefa.finalizada ? 'Voltar' : 'OK'}
            </button> <span>    </span>              
            {tarefa.texto} <span>    </span>   
            <button onClick={() => RemoverTarefa(tarefa.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AFazer2;