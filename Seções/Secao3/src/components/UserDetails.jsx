import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    
        <div>
            <h2> Detalhes da pessoa</h2>
            <ul>
                <li>nome: {nome} </li>
                <li>idade: {idade} </li>
                <li>profissao: {profissao} </li>
            </ul>
        </div>
  )
}

export default UserDetails