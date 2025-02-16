import React, { useState } from 'react';

const ManageData = () => {
  // Estado para someData
  const [someData, setSomeData] = useState(10);

  // Estado para number
  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData} </p>
        <button onClick={() => setSomeData(15)}>Mudar Variável</button>
      </div>
      <div>
        <p>Valor: {number} </p>
        <button onClick={() => setNumber(25)}>Mudar Variável</button>
      </div>
    </div>
  );
};

export default ManageData;
