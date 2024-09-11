import React, { useEffect, useState } from 'react';
import { gerarNomesCargos } from '../util/listaFaker';



const Exercise10 = () => {
  const dados = gerarNomesCargos();
  const [lista, setLista] = useState([]);
  useEffect(() => {
    setLista(dados);
  }, []);
  const [filtro, setFiltro] = useState('');

  const filtrar = (event) => {
    setFiltro(event.target.value);
  };

  const infoFiltrada = lista.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().startsWith(filtro.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Exercício 10</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filtro}
        onChange={filtrar}
      />
      <ul>
        {infoFiltrada.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;