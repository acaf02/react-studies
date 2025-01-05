import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("ana")
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <h1>If ternário</h1>
            {name === "nina" ? (
                <div>
                    <p>O nome é nina</p>
                </div>
            ) : (
                <div>
                    <p>nome não encontrado</p>
                </div>
            )}
            <button onClick={() => setName("nina")}>clique</button>
        </div>
    )
}

export default ConditionalRender