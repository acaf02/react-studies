import './Myform.css'
import React, { useState } from 'react'

const Myform = ({ user }) => {
  // controled inputs
  // gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('enviar formulario')
    console.log(name, email, bio, role)

    //limpar formularios
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }
  return (
    <div>
      {/* envio de form */}
      {/* criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input type='text' name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
        </div>
        {/* label envolvendo input */}
        {/* simplificar a manipulação de state */}
        <label>
          <span>E-mail</span>
          <input type='email' name='email' placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        {/* input de textarea */}
        <label>
          <span>Bio:</span>
          <textarea name='bio' placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* select */}
        <label>
          <span> Função do sistema</span>
          <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type='submit' value="Enviar" />
      </form>
    </div>
  )
}

export default Myform