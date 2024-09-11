import React, { useEffect, useState } from 'react';
import Fatorial from "../components/fatorial";

const Exercise07 = () => {
  const [numero, SetNumero] = useState(3);


  return (
    <div>
      <h1>Exercício 07</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => SetNumero(parseInt(e.target.value))}
        placeholder="Número"
      />
        <Fatorial num={numero} />
    </div>
  );
};

export default Exercise07;
