import React, { useState, useEffect } from 'react';

function Exercise14() {
  const [estados, setEstados] = useState([]);
  const [distritos, setDistritos] = useState([]);
  const [filtroDistritos, setFiltroDistritos] = useState([]);
  const [selecaoUF, setSelecaoUF] = useState('');
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    buscarEstados();
  }, []);

  const buscarEstados = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const data = await response.json();
      setEstados(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const buscaGeralDistritos = async (ufId) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/distritos`);
      const data = await response.json();
      setDistritos(data);
      setFiltroDistritos(data); 
    } catch (error) {
      console.error('Erro ao buscar distritos:', error);
    }
  };

  const mudancaEstado = (e) => {
    const selecionado = e.target.value;
    setSelecaoUF(selecionado);

    if (selecionado) {
      buscaGeralDistritos(selecionado);
    } else {
      setDistritos([]); 
      setFiltroDistritos([]);
    }
  };

  const mudancaFiltro = (e) => {
    const text = e.target.value.toLowerCase();
    setFiltro(text);

    const filtered = distritos.filter((distrito) =>
      distrito.nome.toLowerCase().startsWith(text)
    );
    setFiltroDistritos(filtered);
  };

  return (
    <div>
      <h1>Exercício 14</h1>
      <label htmlFor="ufSelect">Selecionar UF:</label>
      <select id="ufSelect" value={selecaoUF} onChange={mudancaEstado}>
        <option value=""></option>
        {estados.map((uf) => (
          <option key={uf.id} value={uf.id}>
            {uf.nome}
          </option>
        ))}
      </select>
      <br/>
      {selecaoUF && (
        <>
          <label htmlFor="filterInput">Filtrar cidades:</label>
          <input
            type="text"
            id="filterInput"
            value={filtro}
            onChange={mudancaFiltro}
            placeholder="Type initials to filter..."
          />
        </>
      )}
      <h2>Distritos:</h2>
      {selecaoUF ? (
        <ul>
          {filtroDistritos.map((distrito) => (
            <li key={distrito.id}>{distrito.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Selecione um estado para começar a filtrar distritos</p>
      )}
    </div>
  );
}

export default Exercise14;