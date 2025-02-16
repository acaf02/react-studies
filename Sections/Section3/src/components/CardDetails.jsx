import React from 'react'

const CardDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2> DEtalhes do carro</h2>
        <ul>
            <li>brand: {brand} </li>
            <li>KM: {km} </li>
            <li>Color: {color} </li>
        </ul>

        {newCar && <p>é novo</p>}
    </div>
  )
}

export default CardDetails