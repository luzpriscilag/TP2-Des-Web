import React, { useState, useEffect } from 'react';

function Exercise16() {
  const [ano, setAno] = useState('');
  const [decada, setDecada] = useState('');
  const [nomes, setNomes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    if (decada) {
      fetchNames(decada);
    }
  }, [decada]);

  const fetchNames = async (decada) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?decada=${decada}`);
      const data = await response.json();
      setNomes(data[0].res);
      setResultado(data[0].res); 
    } catch (error) {
      console.error('Error ao buscar nomes:', error);
    }
  };

  const mudançaAno = (e) => {
    const entradaAno = e.target.value;
    setAno(entradaAno);

    if (entradaAno.length === 4 && !isNaN(entradaAno)) {
      const entradaDecada = entradaAno.slice(0, 3) + '0';
      setDecada(entradaDecada);
    } else {
      setDecada('');
      setNomes([]);
      setResultado([]);
    }
  };

  const mudancaFiltro = (e) => {
    const text = e.target.value.toLowerCase();
    setFiltro(text);

    const filtroFinal = nomes.filter((name) =>
      name.nome.toLowerCase().includes(text)
    );
    setResultado(filtroFinal);
  };

  return (
    <div>
      <h1>Exercício 16</h1>

      <input
        type="text"
        id="yearInput"
        value={ano}
        onChange={mudançaAno}
        placeholder="Digite um ano..."
      />

      <h2>Nomes:</h2>
      {decada ? (
        <ol>
          {resultado.slice(0, 10).map((name) => (
            <li key={name.nome}>{name.nome}</li>
          ))}
        </ol>
      ) : (
        <p>Insira um ano e o filtro retornará os 10 nomes mais frequentes da década.</p>
      )}
    </div>
  );
}

export default Exercise16;
