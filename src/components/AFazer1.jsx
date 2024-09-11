import React, { useReducer, useState } from 'react';
import styles from './AFazer.module.css';

const redutor = (state, action) => {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVER_TAREFA':
      return state.filter((tarefa) => tarefa.id !== action.payload);
    default:
      return state;
  }
};

const AFazer1 = () => {
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
          <li key={tarefa.id}>
            {tarefa.text}<span>    </span>
            <button onClick={() => RemoverTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AFazer1;