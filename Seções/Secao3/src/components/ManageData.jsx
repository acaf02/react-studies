import React, { useState } from 'react'

const ManageData = () => {

const someData = 10;

const [number, setNumer] = useState(15);

  return (
    <div>
        <div>
            <p>valor: {someData} </p>
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div>
        <div>
            <p>valor: {number} </p>
            <button onClick={() => setNumer(25)}>Mudar Variavel</button>
        </div>
    </div>
  )
}

export default ManageData