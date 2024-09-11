import React, { useEffect, useState } from 'react';
import { gerarListaNomes } from '../util/listaFaker';

const Exercise08 = () => {
  const listaTemp = gerarListaNomes();

  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(listaTemp);
  }, [])

  const [filtro, setFiltro] = useState("");

  const filtrarLista = (lista, filtro) => {
    if (!filtro) return lista;

    const iniciais = filtro.toLowerCase();

    return lista.filter((item) => {
      const iniciaisLista = item
        .split(" ")
        .map((word) => word.charAt(0).toLowerCase())
        .join("");
      return iniciaisLista.startsWith(iniciais);
    });
  };

  const nomesFiltrados = filtrarLista(lista, filtro);
  
  return (
    <div>
      <h1>Exercício 08</h1>
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

export default Exercise08;
