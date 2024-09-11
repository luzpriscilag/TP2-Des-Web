import React, { useState, useMemo, useCallback } from 'react';
import { gerarNomesCargos } from '../util/listaFaker';



const Exercise11 = () => {
  const dados = gerarNomesCargos();
  
  // Forma de driblar muitos re-renders
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  
  const [filtro, setFiltro] = useState('');

  const filtrar = useCallback(debounce((event) => {
    setFiltro(event.target.value);
  }, 300), []);

  const resultado = useMemo(() => {
    return dados.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(filtro.toLowerCase())
      )
    );
  }, [filtro]);

  return (
    <div>
      <h1>Exercício 11</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={filtrar}
      />
      <ul>
        {resultado.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise11;