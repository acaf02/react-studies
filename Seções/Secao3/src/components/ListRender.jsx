import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["ana", "nina", "liege"])
    const [users, setUsers] = useState([
        {id:1, name:"ana", age: 22},
        {id: 2, name:"nina", age:3},
        {id:3, name:"liege", age:29}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
            <button onClick={deleteRandom}> Delete</button>
        </ul>

        
    </div>
  )
}

export default ListRender