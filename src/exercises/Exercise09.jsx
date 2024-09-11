import React, { useEffect, useState } from 'react';
import { gerarListaNomes } from '../util/listaFaker';

const Exercise09 = () => {
  const listaTemp = gerarListaNomes();

  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(listaTemp);
  }, [])

  const [filtro, setFiltro] = useState("");

  const filtrarLista = (lista, filtro) => {
    if (!filtro) return lista;

    return lista.filter((item) => {
      return item.toLowerCase().includes(filtro);
    });
  };

  

  const nomesFiltrados = filtrarLista(lista, filtro);
  
  return (
    <div>
      <h1>Exercício 09</h1>
      <input
        type="text"
        placeholder="Filtrar por iniciais"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {nomesFiltrados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise09;
