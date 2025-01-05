import React from 'react'
//props

const ShowUserName = (props) => {
  return (
    <div>
        <h2>Nome do usuário: {props.name}</h2>
    </div>
  )
}

export default ShowUserName