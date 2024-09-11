import React, { useState, useMemo } from 'react';

const FactorialCalculator = ({ num }) => {
  const [numAtual, setNumAtual] = useState(num);
  const [reprocesso, setReprocesso] = useState(false);

  const fatorial = useMemo(() => {
    const fatorial = (n) => {
      if (n <= 1) return 1;
      return n * fatorial(n - 1);
    };
    return fatorial(numAtual);
  }, [numAtual, reprocesso]);

  const reprocessar = () => {
    setNumAtual(num);
    setReprocesso((prev) => !prev);
  };

  return (
    <div>
      <button onClick={reprocessar}>Calculadora de Fatorial</button>
      <p>Número: {numAtual}</p> 
      <p>Fatorial: {fatorial}</p>
    </div>
  );
};

export default FactorialCalculator;