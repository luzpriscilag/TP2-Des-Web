import React, { useState, useEffect } from 'react';

function Exercise13() {
  const [estados, setEstados] = useState([]);
  const [distritos, setDistritos] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  useEffect(() => {
    buscarEstados();
  }, []);

  const buscarEstados = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'); 
      const data = await response.json();
      setEstados(data);
    } catch (error) {
      console.error('Erro na busca de estados:', error);
    }
  };

  const buscarDistritos = async (uf) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`); 
      const data = await response.json();
      setDistritos(data);
    } catch (error) {
      console.error('Erro na busca de distritos:', error);
    }
  };

  const mudancaEstado = (e) => {
    const selecao = e.target.value;
    setEstadoSelecionado(selecao);

    if (selecao) {
      buscarDistritos(selecao);
    } else {
      setDistritos([]); 
    }
  };

  return (
    <div>
      <h1>Exercício 13</h1>

      <label htmlFor="dropdown1">Selecionar categoria: </label>
      <select id="dropdown1" value={estadoSelecionado} onChange={mudancaEstado}>
        <option value=""></option>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
      <br/>
        <h1>{estadoSelecionado}</h1>
        <ul>
        {distritos.map((distrito) => (
          <li key={distrito.id}>
            {distrito.nome}
          </li>
        ))}
        </ul>
    </div>
  );
}

export default Exercise13;